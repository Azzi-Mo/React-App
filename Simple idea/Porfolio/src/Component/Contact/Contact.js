import React from "react";
import { Container, TextWrapper, Heading } from "../../globalStyle";
import { InfoContent, FootContent } from "./ContactStyle";
export const Contact = ({ props, size, mobileBreakpoint }) => {
  const textWrapper = {
    contact: "Contact ",
    heading:
      "Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love.",
    largeBreakpoint: "60px",
    tabletBreakpoint: "25px",
    phoneBreakpoint: "15px",
  };

  const getSizePage = (resize) => {
    if (resize <= "480") {
      return "small";
    } else if (resize > "480" && resize <= "768") {
      return "medium";
    } else if (resize > "768" && resize <= "1024") {
      return "large";
    } else {
      return "x_large"; // default value
    }
  };

  setInterval(() => {
    console.log(getSizePage(window.innerWidth));
  }, 1000);

  return (
    <Container gray>
      <InfoContent>
        <TextWrapper snow1 size={textWrapper.size1}>
          {textWrapper.contact}
        </TextWrapper>

        <Heading
          size={
            getSizePage(window.innerWidth) === "small"
              ? "15px"
              : getSizePage(window.innerWidth) === "medium"
              ? "20px"
              : getSizePage(window.innerWidth) === "large"
              ? "25px"
              : "30px"
          }
        >
          {textWrapper.heading}
        </Heading>
      </InfoContent>
      <FootContent></FootContent>
    </Container>
  );
};
