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
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface Message {
  text: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedChat, setSelectedChat] = useState("");

  function sendMessage(message: string) {
    let newMessage = {
      text: message,
    };
    setMessages((prevState) => [...prevState, newMessage]);
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
                  <Message key={i} type={"sended"} messageText={message.text} />
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
