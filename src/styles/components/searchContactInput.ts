import { styled } from "..";

export const SearchContainer = styled("div", {
  display: "flex",
  position: "relative",
});
export const OptBtn = styled("button", {
  position: "absolute",
  top: 15,
  left: 5,

  background: "none",
  border: "none",
  svg: {
    color: "white",
  },
  "&:hover": {
    cursor: "pointer",
  },
});
export const Input = styled("input", {
  padding: "1.3rem",
  margin: "0 0 2rem 1rem",

  flex: 1,

  background: "none",
  border: "none",
  borderBottom: "1px solid $gray100",
  color: "white",

  fontSize: "1rem",
});
