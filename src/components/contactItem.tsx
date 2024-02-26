import { Wrapper } from "@/styles/components/contactItem";
import Image from "next/image";

interface ContactItemProps {
  chat: { id: string; messages: string[] };
  handleSelectContact: (chat: { id: string; messages: string[] }) => void;
}

export function ContactItem({ chat, handleSelectContact }: ContactItemProps) {
  return (
    <Wrapper onClick={() => handleSelectContact(chat)}>
      <Image
        src="https://placehold.co/600x400"
        height={30}
        width={30}
        alt={"Profile image"}
      ></Image>
      <h3>{chat.id}</h3>
    </Wrapper>
  );
}
