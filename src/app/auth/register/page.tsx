"use client";
import { FormEvent } from "react";
import { FormContainer, FormWrapper } from "./style";

export default function Register() {
  function handleSubmit(e: FormEvent) {}
  return (
    <FormContainer>
      <FormWrapper>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="Crie um nome de usuario" />
          <input type="email" placeholder="Digite seu email" />
          <input type="password" placeholder="Crie uma senha" />
          <button type="submit">Cadastrar</button>
        </form>
      </FormWrapper>
    </FormContainer>
  );
}
