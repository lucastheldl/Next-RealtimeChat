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
  borderLeft: "5px solid transparent",

  background: "none",

  img: {
    borderRadius: "50%",
  },

  h3: {
    color: "$white",
  },

  "&:hover": {
    cursor: "pointer",
    borderLeft: "5px solid $gray100",
    background: "linear-gradient(45deg, transparent, $green500)",
  },
});
