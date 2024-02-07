import {
  Input,
  MessageContainer,
  SendBtn,
} from "@/styles/components/messageInput";

export function MesageInput() {
  return (
    <MessageContainer>
      <Input placeholder="Digite uma mensagem..." />
      <SendBtn>Send</SendBtn>
    </MessageContainer>
  );
}
