import { styled } from "./";

export const Wrapper = styled("main", {
  display: "flex",
});

export const ContactsContainer = styled("section", {
  display: "flex",
  flexDirection: "column",

  height: "100vh",
  flex: 0.3,
  background: "linear-gradient(to top,$green500 0%, $green300 100%)",
});

export const ChatContainer = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flex: 1,

  height: "100vh",
  backgroundColor: "$gray100",
});

export const ChatArea = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",

  padding: "0 1rem",
});
