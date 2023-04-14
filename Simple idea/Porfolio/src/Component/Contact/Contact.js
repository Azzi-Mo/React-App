import React from "react";
import {
  Section,
  HeadingSize1,
  HeadingSize4,
} from "../../globalStyle";
import {
  FooterContainer,
  FooterUp,
  FooterDown,
  InfoBox1,
  InfoBox2,
  InfoBox2Input,
  InfoBox2textarea,
  InfoBox2Span
} from "./ContactStyle";
import { useState } from "react";
import { useEffect } from "react";
export const Contact = () => {
  const ContactData = {
    contact: "Contact ",
    heading:
      "Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love.",
    inputs:{email: "email",
    password: "password",},
    infoBox2Span:'send message'
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
    <Section smPadding="50px 0 0" padding="50px 0 0">
      <FooterContainer>
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
              {ContactData.contact}
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
              {ContactData.heading}
            </HeadingSize4>
          </InfoBox1>

          <InfoBox2>
            <InfoBox2Input type={ContactData.inputs.email}></InfoBox2Input>
            <InfoBox2Input type={ContactData.inputs.password}></InfoBox2Input>
            <InfoBox2textarea rows="4" cols="50" ></InfoBox2textarea>
            <InfoBox2Span color={'#FEFFFE'}>{ContactData.infoBox2Span}</InfoBox2Span>
          </InfoBox2>
        </FooterUp>

        <FooterDown></FooterDown>
      </FooterContainer>
    </Section>
  );
};
