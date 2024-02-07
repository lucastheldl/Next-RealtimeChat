import { styled } from "./";

export const Wrapper = styled("main", {
  display: "flex",
});

export const ContactsContainer = styled("section", {
  display: "flex",
  flexDirection: "column",

  height: "100vh",
  flex: 0.3,
  backgroundColor: "$green300",
});

export const ChatContainer = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flex: 1,

  height: "100vh",
  backgroundColor: "$gray100",
});
