import { styled } from "..";

export const FormContainer = styled("div", {
  // background-color: ${(props) => props.theme["gray-300"]},
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
export const FormWrapper = styled("div", {
  // background-color: ${(props) => props.theme["gray-300"]},
  padding: 2,
});

export const RegisterForm = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: 1,
});
