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
  height: "100vh",
  flex: 1,
  backgroundColor: "white",
});
