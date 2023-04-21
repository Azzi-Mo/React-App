import React from 'react'
import { Section ,Container } from '../../globalStyle'
import {
     ContactSoicalslide , ContactNameWrapper,
    ContactName,
  ContactIconWrapper,
    ContactIcons ,} from '../Contact/ContactStyle'
import {contactData } from '../../data/ContactData';

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
                    <ContactIcons className={el.imgClass} key={el.imgClass}>
                    {el.icon}
                    </ContactIcons>

                    ))}

                </ContactIconWrapper>

            </ContactSoicalslide>

       </Container>
    </Section>
  )
}


