import React from "react";
import { Link } from "react-router-dom";
import { Button,Container,MainHeading, Column, Row, TextWrapper } from "../../globalStyle";
// import HeroStyle from "./HeroStyles";
import { BiPlayCircle } from "react-icons/bi";
import {
  HeroRow,
  HeroSection,
  Heading,
  HeroText,
  HeroColumn,
  ButtonContainer,
} from "./HeroStyles";

function Hero() {
  return (
    <HeroSection>
      <Row justify="center" align="center" height="100%" padding="2rem">
        <Column align="center" mb="10%">
          <MainHeading>
            {" "}
            Every Create Music
            <TextWrapper
              color="white"
              size="clamp(1rem,3vm,1.3rem)"
              lineHeight="480px"
              align="center"
            >
              Discover , stream and share a constantly expanding mix of music
              from emerging and major artists around the world
            </TextWrapper>
            <ButtonContainer>
              <Link to="sign-up">
                <Button big fontBig>
                  Get started
                </Button>
              </Link>
              <Button big fontBig>
                <BiPlayCircle size="2.3rem"></BiPlayCircle>
              </Button>
            </ButtonContainer>
          </MainHeading>
        </Column>
      </Row>
    </HeroSection>
  );
}

export default Hero;
