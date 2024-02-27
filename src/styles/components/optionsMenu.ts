import { styled } from "..";
import Link from "next/link";

export const OptionsContainer = styled("div", {
  position: "absolute",
  top: 50,
  left: 15,

  flexDirection: "column",
  alignItems: "center",

  listStyle: "none",

  borderRadius: "6px",
  padding: "1rem",
  width: "250px",

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
  color: "White",
  textDecoration: "none",

  borderBottom: "1px solid white",
  marginBottom: "1rem",

  "&:hover": {
    cursor: "pointer",
  },
});
