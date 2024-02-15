import {
  Input,
  MessageContainer,
  SendBtn,
} from "@/styles/components/messageInput";
import { Send } from "lucide-react";

export function MesageInput() {
  return (
    <MessageContainer>
      <Input placeholder="Digite uma mensagem..." />
      <SendBtn>
        <Send height={22} width={22} />
      </SendBtn>
    </MessageContainer>
  );
}
