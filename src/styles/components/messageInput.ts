import { styled } from "..";

export const MessageContainer = styled("div", {
  display: "flex",
  width: "100%",
});

export const Input = styled("input", {
  flex: 1,
  padding: "1rem",

  border: "none",

  backgroundColor: "white",

  "&:hover": {
    cursor: "pointer",
  },
});
export const SendBtn = styled("button", {
  padding: "1rem",

  border: "none",

  backgroundColor: "$green300",

  "&:hover": {
    cursor: "pointer",
    backgroundColor: "$green500",
  },
});
