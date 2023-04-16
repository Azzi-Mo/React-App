import React from "react";

import { Section, Container } from "../../globalStyle";
import { 
  ContactWrapper,
    ContactTextWrapper,
      ContactTitle,
      ContactHeading,
    ContactInfo,
      Contactinpts,
      ContactTextArea,
      ContactWrapperSendMessage,
      ContactSendMessage,

  ContactSoicalslide,
    ContactNameWrapper,
      ContactName,
    ContactIconWrapper,
      ContactIcons ,


 } from "./ContactStyle";
 import { featuresData } from '../../data/ContactData';

export const Contact = () => {
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

  console.log(getSizePage(window.innerWidth));

  return (
    <Section smPadding="50px 10px" position="relative" id="Contact" inverse>
      <Container   inverse>
        <ContactWrapper>

            <ContactTextWrapper>

               <ContactTitle weight='bolder'>Contact</ContactTitle> 

               <ContactHeading>
               I would love to hear about your project
                and how I could help. Please fill in the form,
                 and I'll get back to you as soon as possible.
               </ContactHeading>

            </ContactTextWrapper>

            <ContactInfo>
               
               <Contactinpts padding ={'0 10px'} placeholder="NAME" type='NAME'></Contactinpts>
               <Contactinpts padding ={'0 10px'} placeholder="EMAIL" type='EMAIL'></Contactinpts>
               <ContactTextArea padding ={'0 10px'}  placeholder="TextArea" type='TextArea'></ContactTextArea>
               <ContactWrapperSendMessage>
               
                  <ContactSendMessage padding='10px 0 '>
                    SEND MESSAGE
                  </ContactSendMessage>
               
               </ContactWrapperSendMessage>

            </ContactInfo>

        </ContactWrapper>

        <ContactSoicalslide>
        
            <ContactNameWrapper>
            
              <ContactName  weight='bolder'>MOSTAFAELHAWARY</ContactName>

            </ContactNameWrapper>

            <ContactIconWrapper>
             {featuresData.map((el) => (

               <ContactIcons className={el.imgClass}>
               {el.icon}
               </ContactIcons>

             ))}

            </ContactIconWrapper>

        </ContactSoicalslide>
      </Container>
    </Section>
  );
};
