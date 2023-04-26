import styled from "styled-components";
import { motion } from 'framer-motion';

export const ContactWrapper = styled.div`

   display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 6rem;
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
                font-size: clamp(3.6rem, 3vw, 3.5rem);
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
      margin-bottom: 4rem;
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

            export const ContactWrapperSendMessage = styled(motion.div)`
               text-align: end;
             `;

             
                  export const ContactSendMessage = styled.a`
                    text-decoration: none;
                    cursor:pointer;
                     color: white;
                     border-bottom: 1px solid   #4CE3A0;
                     padding: ${(props) => props.padding};
                     
                  `;
            
export const ContactSoicalslide = styled.div`

      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding-top: ${({ pt }) => (pt ? pt : "")};
      padding-bottom:${({ pb }) => (pb  ? pb  : "")};
      grid-gap: 24.5rem;
      border-bottom: ${({ bb }) => (bb ? bb : "")};
      border-top: ${({ bt }) => (bt ? bt : "")};
	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 4rem;
      grid-gap: 21rem;

	}
	@media screen and (max-width: 992px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 1rem;

	}
   @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: .1rem;

	}

`;
            export const ContactNameWrapper = styled.div`
                     display: grid;
                     font-size: clamp(1.1rem, 2.5vw, 1.5rem);
                     align-items: center;
                  @media screen and (max-width: 768px) {
                     text-align: center;
                  }
                  @media screen and (max-width: 992px) {
               
                     align-items: center;
                     text-align: center;
                     /* font-size: clamp(1.6rem, 2.6vw, 1.6rem); */

                  }
            `;

                   export const ContactName = styled.div`
                      color: white;
                      @media screen and (max-width: 992px) {
                
                   }
                     `;
                     

            export const ContactIconWrapper = styled.div`
                      display: grid;
                      grid-template-columns: repeat(4,1fr);
                      text-align:end;

                      z-index: 2;


                  @media screen and (max-width: 768px) {
                      text-align: center;
                      padding:  0 1%;

                  }
                  @media screen and (max-width: 992px) {
                     text-align: center;
                     padding:  0 25%;
                  }
                   `;

                   export const ContactIcons = styled.a`  
                      display: flex;
                      justify-content: space-around;

                      svg{
                         width: clamp(1.1rem, 5vw, 2.5rem);
                         z-index: 1;
                         cursor: pointer;
                         @media screen and (max-width: 768px) {
 
                            /* grid-gap: 1rem; */
                        }
                        @media screen and (max-width: 992px) {
                           width: clamp(1.9rem, 2vw, 2.8rem);
                           
                        }
                      }
                      
              
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
