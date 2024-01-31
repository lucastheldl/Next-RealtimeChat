"use client";
import {
  FormContainer,
  FormWrapper,
  RegisterForm,
} from "@/styles/pages/register";
import { signUp } from "../../../firebase/auth/signUp";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const RegisterSchema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
});

type RegisterInput = z.infer<typeof RegisterSchema>;

export default function Register() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<RegisterInput>({
    resolver: zodResolver(RegisterSchema),
  });

  async function handleRegister(data: RegisterInput) {
    const { result, error } = await signUp(data.email, data.password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    reset();
  }
  return (
    <FormContainer>
      <FormWrapper>
        <RegisterForm onSubmit={handleSubmit(handleRegister)}>
          <input
            type="text"
            placeholder="Crie um nome de usuario"
            required
            {...register("username")}
          />
          <input
            type="email"
            placeholder="Digite seu email"
            required
            {...register("email")}
          />
          <input
            type="password"
            placeholder="Crie uma senha"
            required
            {...register("password")}
          />
          <button type="submit">Cadastrar</button>
        </RegisterForm>
      </FormWrapper>
    </FormContainer>
  );
}
