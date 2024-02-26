import { Header } from "@/styles/components/chatHeader";

interface ChatHeaderProps {
  chat: { id: string; messages: string[] } | null;
}
export function ChatHeader({ chat }: ChatHeaderProps) {
  return (
    <Header>
      <h2>{chat ? chat.id : <p>Realtime chat</p>}</h2>
    </Header>
  );
}
