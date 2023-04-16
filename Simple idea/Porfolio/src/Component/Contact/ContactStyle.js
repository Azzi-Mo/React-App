import styled from "styled-components";
import { motion } from 'framer-motion';

export const ContactWrapper = styled.div`

   display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin-top: 4rem;
   margin-bottom: 4rem;
	grid-gap: 2rem;
	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 4rem;
	}
	@media screen and (max-width: 992px) {
		grid-template-columns: repeat(1, 1fr);
	}


`;


    export const ContactTextWrapper = styled(motion.div)`
    
    
    position: relative;
    margin-top: 2rem;


      @media screen and (max-width: 992px) {
         text-align: center;
      }
    `;

            export const ContactTitle = styled(motion.div)`
                color: white;
                font-size: clamp(2.6rem, 5vw, 3.5rem);
                font-weight: ${(props) => props.weight };
 
            `;

            export const ContactHeading = styled(motion.div)`
            
                  font-size: clamp(.9rem,1.2vw, 1rem);
                  color: white;
            @media screen and (max-width: 992px) {
                  padding: ${({ smPadding }) => (smPadding ? smPadding : "70px 0")};
               }

            `;

    export const ContactInfo = styled.div`
    
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      margin-top: 4rem;
      grid-gap: 2rem;
	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(1, 1fr);
		grid-row-gap: 4rem;
	}
	@media screen and (max-width: 992px) {
		grid-template-columns: repeat(1, 1fr);
	}


    `;


            export const Contactinputs = styled(motion.input)`
              
               border: none;
               border-bottom: 1px solid white;
               background: none;
               outline: none;
               color: white;
               padding: ${(props) => props.padding};
            `;

            export const ContactTextArea = styled(motion.textarea)`
            
               border: none;
               border-bottom: 1px solid white;
               background: none;
               outline: none;
               color: white;
               padding: ${(props) => props.padding};
            `;

            export const ContactWrapperSendMessage = styled.div`
               text-align: end;
             `;

             
            export const ContactSendMessage = styled.span`
               color: white;
               border-bottom: 1px solid   #4CE3A0;
               padding: ${(props) => props.padding};
               
            `;
            
export const ContactSoicalslide = styled.div`

      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding-top: 4rem;
      padding-bottom: 4rem;
      grid-gap: 2rem;
      border-top:1px solid white ;

	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 4rem;
	}
	@media screen and (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);

	}
   @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: 2rem;

	}

`;
            export const ContactNameWrapper = styled.div`
                     display: grid;
                     font-size: clamp(1.1rem, 2vw, 1.5rem);
                  @media screen and (max-width: 768px) {
                     text-align: center;
                  }
                  @media screen and (max-width: 992px) {
               
                     align-items: center;

                  }
            `;

                   export const ContactName = styled.div`
                      color: white;
                      font-weight: ${(props) => props.weight };
                     `;

            export const ContactIconWrapper = styled.div`
                      text-align: end;
                  @media screen and (max-width: 768px) {
                      text-align: center;

                  }
                  @media screen and (max-width: 992px) {}
                   `;

                   export const ContactIcons = styled.i`          
                   `;


// ContactWrapper
  // ContactTextWrapper
      // ContactTitle
      // ContactHeading
  // ContactInfo
      // Contactinpts
      // ContactTextArea
      // ContactWrapperSendMessage
      // ContactSendMessage
// ContactSoicalslide
   // ContactNameWrapper
      //ContactName
   // ContactIconWrapper
      // ContactIcons
