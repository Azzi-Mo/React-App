import React from 'react'
import { Section ,Container } from '../../globalStyle'
import {
     ContactSoicalslide , ContactNameWrapper,
    ContactName,
  ContactIconWrapper,
    ContactIcons ,} from '../Contact/ContactStyle'
import { 
         HeadInfoWrapper , 
         HeadImgWrapper, 
            HeadImg , 
         HeadInfoDetail,
            HeadName , 
            HeadDes , 
            HeadContact } from './HeadStyle';

import {contactData } from '../../data/ContactData';
import { Data } from '../../data/HeadData';
export const  Head  = () =>  {
  return (
    <Section pt='20px'>
       <Container>

            <ContactSoicalslide >
                    
                <ContactNameWrapper>
                
                    <ContactName  weight='bolder'>MOSTAFAELHAWARY</ContactName>

                </ContactNameWrapper>

                <ContactIconWrapper>
                    {contactData.map((el) => (
                    <ContactIcons  className={el.imgClass} key={el.imgClass}>
                    {el.icon}
                    </ContactIcons>

                    ))}

                </ContactIconWrapper>

            </ContactSoicalslide>

            
            {Data.map((el)=>
                (
                    <HeadInfoWrapper>

                         <HeadImgWrapper>
                
                           <HeadImg src={el.img}></HeadImg>
        
                        </HeadImgWrapper>

                        <HeadInfoDetail>
                        
                          <HeadName>{el.HeadName}</HeadName>
                          <HeadDes>{el.des}</HeadDes>
                          <HeadContact href={el.contactLink}>contact me</HeadContact>
                          
                        </HeadInfoDetail>

                  </HeadInfoWrapper>
                ))}


       </Container>
    </Section>
  )
}


