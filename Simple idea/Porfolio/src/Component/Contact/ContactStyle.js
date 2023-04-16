import styled from "styled-components";

export const ContactWrapper = styled.div`

    display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin-top: 4rem;
	grid-gap: 2rem;
	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 4rem;
	}
	@media screen and (max-width: 992px) {
		grid-template-columns: repeat(1, 1fr);
	}


`;


    export const ContactTextWrapper = styled.div`
    
    
    position: relative;
    margin-top: 2rem;
    `;


            export const ContactTitle = styled.div`
            	font-size: clamp(2rem, 5vw, 3.5rem);
                color: white;

            `;

            export const ContactHeading = styled.div`
            
            font-size: clamp(.9rem,1.2vw, 1rem);
            color: white;

            `;

    export const ContactInfo = styled.div`
    
    display: grid;
	grid-template-columns: repeat(1, 1fr);
	margin-top: 4rem;
	grid-gap: 2rem;
	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 4rem;
	}
	@media screen and (max-width: 992px) {
		grid-template-columns: repeat(1, 1fr);
	}


    `;


            export const Contactinpts = styled.input`
              
               border: none;
               border-bottom: 1px solid white;
               background: none;
               outline: none;
               color: white;
               padding: ${(props) => props.padding};
            `;

            export const ContactTextArea = styled.textarea`
            
               border: none;
               border-bottom: 1px solid white;
               background: none;
               outline: none;
               color: white;
               padding: ${(props) => props.padding};
            `;

            export const ContactWrapperSendMessage = styled.div``;

            export const ContactSendMessage = styled.span`
               color: white;
            `;
            
export const ContactSoicalslide = styled.div``;

            export const ContactNameWrapper = styled.div``;

                   export const ContactName = styled.div``;

            export const ContactIconWrapper = styled.div``;

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
