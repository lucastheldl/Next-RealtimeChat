import { Header } from "@/styles/components/chatHeader";
interface Chat {
  id: string;
  messages: string[];
}
interface ChatHeaderProps {
  chat: Chat | null;
}
export function ChatHeader({ chat }: ChatHeaderProps) {
  return (
    <Header>
      <h2>{chat ? chat.id : <p>Realtime chat</p>}</h2>
    </Header>
  );
}
