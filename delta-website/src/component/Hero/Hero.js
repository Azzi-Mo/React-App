
import React from 'react'
import { Link } from 'react-router-dom'
import {Button , Container , MainHeading} from '../../globalStyle'
import {HeroVideo , HeroSection , HeroText , ButtonWrapper , HeroButton} from './HeroStyle'
import React from 'react'

const Hero = () => {
  return (
    <HeroSection>
      
     <HeroVideo src='../../../public/assets/hero.mp4'></HeroVideo>
     <Container>
        <MainHeading></MainHeading>
        <HeroText> We provide the best security systems for clients all over the world</HeroText>
        <ButtonWrapper>
            <Link to='signup'>
              <Buutton>Gt Started</Buutton>
            </Link>
            <HeroButton>Find More</HeroButton>
        </ButtonWrapper>
     </Container>

  
    </HeroSection>
  )
}

export default Hero
