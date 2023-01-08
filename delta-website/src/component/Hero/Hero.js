
import React from 'react'
import { Link } from 'react-router-dom'
import {Button , Container , MainHeading} from '../../globalStyle'
import {HeroVideo , HeroSection , HeroText , ButtonWrapper , HeroButton} from './HeroStyle'

const Hero = () => {
  return (
    <HeroSection>
      
     <HeroVideo src='./assets/hero.mp4' autoPlay muted></HeroVideo>
     <Container>
        <MainHeading>Your data is secure with us </MainHeading>
        <HeroText> We provide the best security systems for clients all over the world</HeroText>
        <ButtonWrapper>
            <Link to='signup'>
              <Button>Gt Started</Button>
            </Link>
            <HeroButton>Find More</HeroButton>
        </ButtonWrapper>
     </Container>

  
    </HeroSection>
  )
}

export default Hero
