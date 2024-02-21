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
import { doc, getDoc, updateDoc, arrayUnion, setDoc } from "firebase/firestore";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
      await updateDoc(userDocRef, {
        priscila: {
          messages: arrayUnion(...messages, message),
        },
      });
    } else {
      await setDoc(userDocRef, {
        priscila: {
          messages: [message],
        },
      });
    }

    setMessages((prevState) => [...prevState, message]);
  }

  function handleSelectContact(id: string) {
    setSelectedChat(id);
  }

  function handleSearchContact(name: string) {}

  useEffect(() => {
    setMessages([]);
  }, [selectedChat]);

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

            {/* <Message type="sended" messageText={"Texto"} />
            <Message
              type="received"
              messageText={"Um testo de test para testar a menssagen"}
            />
            <Message
              type="received"
              messageText={
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
              }
            />
            <Message type="sended" messageText={"Eu sei"} /> */}
          </ChatArea>
          <MesageInput sendMessage={sendMessage} />
        </ChatContainer>
      </Wrapper>
    </>
  );
}
