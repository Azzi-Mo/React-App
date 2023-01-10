import React from 'react'
import Features from '../Component/Features/Features'
import Client from '../Component/Clients/Clients'
import {heroOne , heroTwo , heroThree , heroFour} from '../Data/HeroData'
import Hero from '../Component/Hero/Hero'

function HomePages() {
  return <>
  <Hero />
  <Features />
  <Client/>
  <heroOne/>
  <heroTwo/>
  <heroThree/>
  <heroFour/>

  </>
}

export default HomePages
