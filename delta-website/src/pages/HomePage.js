import React from "react";
import { Content } from "../component/Content/Content";
import Features from '../component/Features/Features'
import Hero from "../component/Hero/Hero"; 
import {heroOne , heroTwo , heroThree} from '../data/HeroData'
const HomePage = () => 
{
    return (
       <>
        <Hero />
       <Features />
       <Content {...heroOne}/>
       <Content {...heroTwo}/>
       <Content {...heroThree}/>

       </>
    )
}
export default HomePage