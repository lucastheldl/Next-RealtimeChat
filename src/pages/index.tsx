import Head from "next/head";

import { Inter } from "next/font/google";
import { ChatContainer, ContactsContainer, Wrapper } from "@/styles/main";
import { ContactItem } from "@/components/contactItem";
import { MesageInput } from "@/components/messageInput";
import { ChatHeader } from "@/components/chatHeader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>RealtimeChat</title>
        <meta
          name="description"
          content="A real time chat app to connect with your friends"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper className={` ${inter.className}`}>
        <ContactsContainer>
          <ContactItem />
          <ContactItem />
          <ContactItem />
        </ContactsContainer>
        <ChatContainer>
          <ChatHeader />
          <MesageInput />
        </ChatContainer>
      </Wrapper>
    </>
  );
}
