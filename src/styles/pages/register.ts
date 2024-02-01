import { styled } from "..";

export const FormWrapper = styled("div", {
  // background-color: ${(props) => props.theme["gray-300"]},
  height: "600px",
  maxWidth: `1120px`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "2rem",
  margin: "5rem auto",
  overflow: "hidden",
  background: "$white",
});
export const FormContainer = styled("div", {
  // background-color: ${(props) => props.theme["gray-300"]},
  display: "flex",
  gap: "1rem",

  width: "100%",
  height: "100%",
});
export const SignInContainer = styled("div", {
  display: "flex",
  flexDirection: "column",

  justifyContent: "center",
  alignItems: "center",
  flex: 1,

  backgroundColor: `$green300`,
  padding: "1rem",
});

export const RegisterForm = styled("form", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flex: 2,
  gap: "0.5rem",

  padding: "1rem",

  h2: {
    color: "$green300",
  },
});
export const RegisterInput = styled("input", {
  backgroundColor: `$gray100`,
  border: "none",
  padding: "1rem",

  maxWidth: "400px",
  width: "100%",
});
export const RegisterBtn = styled("button", {
  maxWidth: "200px",
  width: "100%",

  backgroundColor: `$green300`,
  border: "none",

  color: "white",
  fontWeight: "bold",

  borderRadius: "2rem",
  padding: "1rem",
});
