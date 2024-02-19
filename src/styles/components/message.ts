import { styled } from "..";

export const MessageConatiner = styled("div", {
  variants: {
    type: {
      sended: {
        backgroundColor: "$green300",
        alignSelf: "flex-end",
        "&::before": {
          content: "",
          position: "absolute",
          top: "70%",
          right: "-15px",
          borderWidth: "10px",
          borderStyle: "solid",
          borderColor: "transparent transparent transparent $green300",
          transform: "translateY(-50%)",
        },
      },
      received: {
        backgroundColor: "$green500",
        alignSelf: "flex-start",
        "&::before": {
          content: "",
          position: "absolute",
          top: "70%",
          left: "-15px",
          borderWidth: "10px",
          borderStyle: "solid",
          borderColor: "transparent $green500 transparent transparent",
          transform: "translateY(-50%)",
        },
      },
    },
  },
  position: "relative",

  maxWidth: "500px",
  overflowWrap: "break-word",

  padding: "1rem",
  borderRadius: "6px",

  color: "white",

  "&:first-child": {
    marginTop: "auto !important",
  },
});
