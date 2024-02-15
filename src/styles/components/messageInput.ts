import { styled } from "..";

export const MessageContainer = styled("form", {
  display: "flex",
  width: "100%",
});

export const Input = styled("input", {
  flex: 1,
  padding: "1rem",

  border: "none",

  backgroundColor: "white",
});
export const SendBtn = styled("button", {
  padding: "1rem",

  border: "none",

  backgroundColor: "$green300",
  color: "white",

  "&:hover": {
    cursor: "pointer",
    backgroundColor: "$green500",
  },

  "& svg": {
    margin: "auto",
  },
});
