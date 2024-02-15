import { MessageConatiner } from "@/styles/components/message";

interface MessageProps {
  type: "sended" | "received";
  messageText: string;
}
export function Message({ type, messageText }: MessageProps) {
  return <MessageConatiner type={type}>{messageText}</MessageConatiner>;
}
