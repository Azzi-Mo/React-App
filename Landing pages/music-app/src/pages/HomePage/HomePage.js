import React from 'react'
import Hero from '../../component/Hero/Hero'
import Content from '../../component/Content/Content'
import {heroOne , heroTwo , heroThree , pricingData } from '../../data/homeData'
function HomePage() {
  return (
  <>
     <Hero />
     <Content {...heroOne}/>
     <Content {...heroTwo}/>
     <Content {...heroThree}/>

  </>
  )
}

export default HomePage
