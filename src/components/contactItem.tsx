import { Wrapper } from "@/styles/components/contactItem";
import Image from "next/image";

export function ContactItem() {
  return (
    <Wrapper>
      <Image
        src="https://placehold.co/600x400"
        height={30}
        width={30}
        alt={"Profile image"}
      ></Image>
      <h3>Lucas Emanoel</h3>
    </Wrapper>
  );
}
