import React from "react";

import { Section, Container } from "../../globalStyle";
import { 
  ContactWrapper,
    ContactTextWrapper,
      ContactTitle,
      ContactHeading,
    ContactInfo,
      Contactinputs,
      ContactTextArea,
      ContactWrapperSendMessage,
      ContactSendMessage,

  ContactSoicalslide,
    ContactNameWrapper,
      ContactName,
    ContactIconWrapper,
      ContactIcons ,


 } from "./ContactStyle";
 import {contactData } from '../../data/ContactData';

export const Contact = () => {
  const initial = {
		y: 40,
		opacity: 0,
	};
	const animate = {
		y: 0,
		opacity: 1,
	};

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

               <ContactTitle 
               weight='bolder'
               initial={initial}
               animate={animate}
               transition={{ duration: 0.5 + 2 * 0.1 }}
               >Contact</ContactTitle> 

               <ContactHeading 
               smPadding={'20px 70px'}
               weight='bolder'
               initial={initial}
               animate={animate}
               transition={{ duration: 0.5 + 6 * 0.1 }}
               >
                 I would love to hear about your project
                 and how I could help. Please fill in the form,
                 and I'll get back to you as soon as possible.
               </ContactHeading>

            </ContactTextWrapper>

            <ContactInfo>
               
               <Contactinputs 
               padding ={'0 15px 25px'} 
               placeholder="NAME" 
               type='NAME'
               initial={initial}
               animate={animate}
               transition={{ duration: 0.5 + 1 * 0.1 }}
               ></Contactinputs>

               <Contactinputs 
               padding ={'0 15px  25px'} 
               placeholder="EMAIL" 
               type='EMAIL'
               initial={initial}
               animate={animate}
               transition={{ duration: 0.5 + 3 * 0.1 }}
               ></Contactinputs>
                
               <ContactTextArea 

               padding ={'0 15px  25px'} 
               placeholder="TextArea" 
               type='TextArea' 
               initial={initial}
               animate={animate}
               transition={{ duration: 0.5 + 6 * 0.1 }}
               ></ContactTextArea>
               <ContactWrapperSendMessage
               initial={initial}
               animate={animate}
               transition={{ duration: 0.5 + 7 * 0.1 }}
               >
               
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
             {contactData.map((el) => (
               <ContactIcons className={el.imgClass} key={el.imgClass}>
               {el.icon}
               </ContactIcons>

             ))}

            </ContactIconWrapper>

        </ContactSoicalslide>
      </Container>
    </Section>
  );
};
