import React from "react";
import {
  Section,
  Container,
  HeadingSize1,
  HeadingSize4,
} from "../../globalStyle";
import { FooterUp, FooterDown, InfoBox1, InfoBox2 } from "./ContactStyle";
import { useState } from "react";
import { useEffect } from "react";
export const Contact = () => {
  const textWrapper = {
    contact: "Contact ",
    heading:
      "Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love.",
    largeBreakpoint: "60px",
    tabletBreakpoint: "25px",
    phoneBreakpoint: "15px",
  };

  const [size, setSize] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSize(
        getSizePage(window.innerWidth) === "small"
          ? "15px"
          : getSizePage(window.innerWidth) === "medium"
          ? "20px"
          : getSizePage(window.innerWidth) === "large"
          ? "25px"
          : "30px"
      );
    }, 10);
    return () => clearInterval(intervalId);
  }, []);

  const getSizePage = (resize) => {
    if (resize <= "480") {
      return "small";
    } else if (resize > "480" && resize <= "768") {
      return "medium";
    } else if (resize > "768" && resize <= "1024") {
      return "large";
    } else {
      return "x_large";
    }
  };

  return (
    <Section smPadding='50px 0 0' padding='50px 0 0'>
      <Container >
        <FooterUp>
          <InfoBox1>
            <HeadingSize1
              snow1
              size={
                getSizePage(window.innerWidth) === "small"
                  ? "20px"
                  : getSizePage(window.innerWidth) === "medium"
                  ? "35px"
                  : getSizePage(window.innerWidth) === "large"
                  ? "40px"
                  : getSizePage(window.innerWidth) === "x_large"
                  ? "70px"
                  : size
              }
            >
              {textWrapper.contact}
            </HeadingSize1>

            <HeadingSize4
              size={
                getSizePage(window.innerWidth) === "small"
                  ? "11px"
                  : getSizePage(window.innerWidth) === "medium"
                  ? "15px"
                  : getSizePage(window.innerWidth) === "large"
                  ? "18px"
                  : getSizePage(window.innerWidth) === "x_large"
                  ? "22px"
                  : size
              }
            >
              {textWrapper.heading}
            </HeadingSize4>
          </InfoBox1>

          <InfoBox2></InfoBox2>
        </FooterUp>

        <FooterDown></FooterDown>
      </Container>
    </Section>
  );
};
