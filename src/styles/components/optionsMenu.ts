import { styled } from "..";
import Link from "next/link";

export const OptionsContainer = styled("div", {
  position: "absolute",
  top: 50,
  left: 15,

  flexDirection: "column",

  listStyle: "none",

  borderRadius: "6px",
  padding: "1rem 0",

  backgroundColor: "$gray800",

  variants: {
    state: {
      OPEN: {
        display: "flex",
      },
      CLOSED: {
        display: "none",
      },
    },
  },
});

export const Option = styled(Link, {
  width: "200px",

  color: "White",
  textDecoration: "none",
  textAlign: "center",

  marginBottom: "1rem",

  padding: "0 1rem",

  "&:hover": {
    cursor: "pointer",
  },
});
