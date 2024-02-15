import {
  Input,
  MessageContainer,
  SendBtn,
} from "@/styles/components/messageInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface MessageInputProps {
  sendMessage: (message: string) => void;
}

const newMessageFormSchema = z.object({
  message: z.string(),
});

type NewMessageFormInputs = z.infer<typeof newMessageFormSchema>;

export function MesageInput({ sendMessage }: MessageInputProps) {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewMessageFormInputs>({
    resolver: zodResolver(newMessageFormSchema),
  });

  async function handleCreateNewMessage(data: NewMessageFormInputs) {
    sendMessage(data.message);
    reset();
  }

  return (
    <MessageContainer onSubmit={handleSubmit(handleCreateNewMessage)}>
      <Input placeholder="Digite uma mensagem..." {...register("message")} />
      <SendBtn type="submit">
        <Send height={22} width={22} />
      </SendBtn>
    </MessageContainer>
  );
}
