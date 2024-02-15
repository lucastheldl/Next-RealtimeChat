import Head from "next/head";

import { Inter } from "next/font/google";
import {
  ChatArea,
  ChatContainer,
  ContactsContainer,
  Wrapper,
} from "@/styles/main";
import { ContactItem } from "@/components/contactItem";
import { MesageInput } from "@/components/messageInput";
import { ChatHeader } from "@/components/chatHeader";
import { SearchContactInput } from "@/components/searchContactInput";
import { Message } from "@/components/message";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
          <ContactItem />
          <ContactItem />
          <ContactItem />
        </ContactsContainer>
        <ChatContainer>
          <ChatHeader />
          <ChatArea>
            <Message type="sended" messageText={"Texto"} />
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
            <Message type="sended" messageText={"Eu sei"} />
          </ChatArea>
          <MesageInput />
        </ChatContainer>
      </Wrapper>
    </>
  );
}
