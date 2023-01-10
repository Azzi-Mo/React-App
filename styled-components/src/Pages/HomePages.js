import React from 'react'
import Features from '../Component/Features/Features'
import Client from '../Component/Clients/Clients'
import Content from '../Component/Content/Content'
import {heroOne , heroTwo , heroThree , heroFour} from '../Data/HeroData'
import Hero from '../Component/Hero/Hero'
import {Heading} from '../globalStyles'

function HomePages() {
  return <>
  <Hero />
  <Features />
  <Client/>
  <Heading id='projects'> Our Projects </Heading>
  <Content {...heroOne}/>
  <Content {...heroTwo}/>
  <Content {...heroThree}/>
  <Content {...heroFour}/>

  </>
}

export default HomePages
