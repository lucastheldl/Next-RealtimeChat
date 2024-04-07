import Head from "next/head";

import { Inter } from "next/font/google";
import {
  ChatArea,
  ChatContainer,
  ChatContentWraper,
  ContactsContainer,
  Wrapper,
} from "@/styles/home";
import { ContactItem } from "@/components/contactItem";
import { MesageInput } from "@/components/messageInput";
import { ChatHeader } from "@/components/chatHeader";
import { SearchContactInput } from "@/components/searchContactInput";
import { Message } from "@/components/message";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { db } from "@/firebase/config";
import {
  doc,
  getDoc,
  arrayUnion,
  setDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { OptionsMenu } from "@/components/optionsMenu";

const inter = Inter({ subsets: ["latin"] });

interface Chat {
  id: string;
  messages: string[];
}

export default function Home() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [messages, setMessages] = useState<string[]>([]);
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [modalState, setModalState] = useState(false);

  const { user } = useContext(AuthContext);

  async function sendMessage(message: string) {
    if (!user || !selectedChat) {
      return;
    }
    const userDocRef = doc(db, "users", user!.uid);

    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      // Document exists, update the chat
      const chatsCollectionRef = collection(db, `users/${user!.uid}/chats`);
      const ChatDocRef = doc(chatsCollectionRef, selectedChat.id);

      await setDoc(
        ChatDocRef,
        {
          messages: arrayUnion(...messages, message),
        },
        { merge: true }
      );
    } else {
      // Document does not exist, create a new chat
      const chatsCollectionRef = collection(db, `users/${user!.uid}/chats`);
      const ChatDocRef = doc(chatsCollectionRef, selectedChat.id);

      await setDoc(ChatDocRef, {
        messages: [message],
      });
    }

    setMessages((prevState) => [...prevState, message]);
  }

  function handleSelectContact(chat: Chat) {
    setSelectedChat(chat);
    setMessages(chat.messages);
  }

  async function handleSearchContact(name: string) {
    const userDocRef = doc(db, "users", user!.uid);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      console.log({ id: userDocSnapshot.id, ...userDocSnapshot.data() });
    }
  }

  function handleShowOptions() {
    setModalState(!modalState);
  }

  useEffect(() => {
    async function fetchChats() {
      const userDocRef = doc(db, "users", user!.uid);
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const chatsCollection = collection(db, `users/${user!.uid}/chats`);

        const snapshot = await getDocs(chatsCollection);

        const chatsData: any = [];
        snapshot.forEach((doc) => {
          chatsData.push({ id: doc.id, ...doc.data() });
        });

        setChats(chatsData);
      }
    }
    fetchChats();
    handleSearchContact("rob");
  }, [selectedChat, user]);

  return (
    <>
      <Head>
        <title>Realtime Chat</title>
        <meta
          name="description"
          content="A real time chat app to connect with your friends"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper className={` ${inter.className}`}>
        <ContactsContainer>
          <SearchContactInput handleShowOptions={handleShowOptions} />
          <OptionsMenu state={modalState ? "OPEN" : "CLOSED"} />
          {chats.map((chat, i) => {
            return (
              <ContactItem
                key={i}
                chat={chat}
                handleSelectContact={handleSelectContact}
              />
            );
          })}
        </ContactsContainer>
        <ChatContainer>
          <ChatHeader chat={selectedChat} />
          <ChatArea>
            {selectedChat ? (
              messages && (
                <ChatContentWraper>
                  {messages.map((message, i) => {
                    return (
                      <Message key={i} type={"sended"} messageText={message} />
                    );
                  })}
                </ChatContentWraper>
              )
            ) : (
              <p>Selecione um chat para conversar...</p>
            )}
          </ChatArea>
          <MesageInput sendMessage={sendMessage} />
        </ChatContainer>
      </Wrapper>
    </>
  );
}
