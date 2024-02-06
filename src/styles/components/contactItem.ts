import { styled } from "..";

export const Wrapper = styled("button", {
  //height: "calc(100vh - 10rem)",
  //maxWidth: `60rem`,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",

  padding: "1rem",

  border: "none",
  borderBottom: "1px solid $gray100",

  background: "none",

  img: {
    borderRadius: "50%",
  },
  "&:hover": {
    cursor: "pointer",
  },
});
