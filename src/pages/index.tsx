import Head from "next/head";

import { Inter } from "next/font/google";
import {
  ChatArea,
  ChatContainer,
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
  updateDoc,
  arrayUnion,
  setDoc,
  where,
  query,
  collection,
  getDocs,
} from "firebase/firestore";

const inter = Inter({ subsets: ["latin"] });

interface Chat {
  id: string;
  name: string;
}

export default function Home() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [messages, setMessages] = useState<string[]>([]);
  const [selectedChat, setSelectedChat] = useState("");

  const { user } = useContext(AuthContext);

  async function sendMessage(message: string) {
    if (!user) {
      return;
    }
    const userDocRef = doc(db, "users", user!.uid);

    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      // Document exists, update the chat
      const chatsCollectionRef = collection(db, `users/${user!.uid}/chats`);
      const priscilaChatDocRef = doc(chatsCollectionRef, "priscila");

      await setDoc(
        priscilaChatDocRef,
        {
          messages: arrayUnion(...messages, message),
        },
        { merge: true }
      );
    } else {
      // Document does not exist, create a new chat
      const chatsCollectionRef = collection(db, `users/${user!.uid}/chats`);
      const priscilaChatDocRef = doc(chatsCollectionRef, "priscila");

      await setDoc(priscilaChatDocRef, {
        messages: [message],
      });
    }

    setMessages((prevState) => [...prevState, message]);
  }

  function handleSelectContact(id: string) {
    setSelectedChat(id);
  }

  function handleSearchContact(name: string) {}

  useEffect(() => {
    async function fetchChats() {
      const userDocRef = doc(db, "users", user!.uid);
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const chatsCollection = collection(db, `users/${user!.uid}/chats`);

        const querySnapshot = await getDocs(chatsCollection);

        const chatsData = querySnapshot.docs.map((doc) => {
          const chatData = doc.data();
          return {
            chatData,
          };
        });
        console.log(chatsData);
        //setChats(chatsData);
      }
    }
    setMessages([]);
    fetchChats();
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
          <SearchContactInput />
          <ContactItem handleSelectContact={handleSelectContact} />
          <ContactItem handleSelectContact={handleSelectContact} />
          <ContactItem handleSelectContact={handleSelectContact} />
        </ContactsContainer>
        <ChatContainer>
          <ChatHeader />
          <ChatArea>
            {messages &&
              messages.map((message, i) => {
                return (
                  <Message key={i} type={"sended"} messageText={message} />
                );
              })}
          </ChatArea>
          <MesageInput sendMessage={sendMessage} />
        </ChatContainer>
      </Wrapper>
    </>
  );
}
