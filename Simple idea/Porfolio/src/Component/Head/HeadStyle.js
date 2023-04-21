import styled from "styled-components";
import { Container } from "../../globalStyle";

export const cont = styled(Container)`

 position: relative;

`

export const HeadInfoWrapper = styled.div`

  display: grid;
	grid-template-columns: repeat(2, 1fr);
   padding-bottom: 4rem;
   position: relative;
   border: 1px solid red;



`

    export const HeadImgWrapper = styled.div`
    
          max-width: 750px;
          max-height: 850px;
          display: flex;
          justify-content: center;
          align-items: center;
          order:2;
          position: absolute;
          top:0;
          right: 0;

    `
          export const HeadImg = styled.img`
          
              border: 0;
              max-width: 100%;
              max-height: 100%;
              vertical-align: middle;
              display: inline-block;
              object-fit: contain;
              z-index: 1;
            
          `
   export const HeadInfoDetail= styled.div`
   
                    position: relative;
                    max-width: 100%;
                    /* display: grid; */
                    grid-column: 1 / 3;
                    z-index: 1;
   `

         export const HeadName = styled.div`
         
                     font-size: clamp(3.5rem, 7vw, 2.5rem);
                     padding:  0 30% 0 0; 
                     margin: ${({ margin }) => (margin ? margin : "")};
                     margin-bottom: ${({ mb }) => (mb ? mb : "")};
                     margin-top: ${({ mt }) => (mt ? mt : "")};
                     color:${(props)=> props.align ? props.align : '#FEFFFE'};
                     text-align: ${(props)=> props.align };
                     letter-spacing: .1rem;
                     line-height: 4rem;
                     @media screen and (max-width: 1100px) {
                        grid-template-columns: repeat(2, 1fr);
                        grid-row-gap: 4rem;
                        margin-bottom: ${({ mb }) => (mb ? mb : "")};
                        margin-top: ${({ mt }) => (mt ? mt : "")};
                     }
                     @media screen and (max-width: 992px) {
                        grid-template-columns: repeat(2, 1fr);
                        grid-row-gap: 4rem;
                        margin-bottom: ${({ mb }) => (mb ? mb : "")};
                        margin-top: ${({ mt }) => (mt ? mt : "")};
                     }

                     @media screen and (max-width: 768px) {
                        grid-template-columns: repeat(1, 1fr);
                        grid-row-gap: 4rem;
                        margin-bottom: ${({ mb }) => (mb ? mb : "")};
                        margin-top: ${({ mt }) => (mt ? mt : "")};
                     }
                     `
         export const HeadDes = styled.div`
         
         font-size: clamp(.5rem, 2.5vw, 1.5rem);
                     margin: ${({ margin }) => (margin ? margin : "")};
                     margin-bottom: ${({ mb }) => (mb ? mb : "")};
                     margin-top: ${({ mt }) => (mt ? mt : "")};
                     color:${(props)=> props.align ? props.align : '#FEFFFE'};
                     text-align: ${(props)=> props.align };

         `
         export const HeadContact = styled.a`
         
         
         font-size: clamp(2.5rem, 7vw, 2.5rem);
                     margin: ${({ margin }) => (margin ? margin : "")};
                     margin-bottom: ${({ mb }) => (mb ? mb : "")};
                     margin-top: ${({ mt }) => (mt ? mt : "")};
                     color:${(props)=> props.align ? props.align : '#FEFFFE'};
                     text-align: ${(props)=> props.align };

         `



// ContactSoicalslide
  // ContactNameWrapper
     // ContactName
  // ContactIconWrapper
     // ContactIcons
// HeadInfoWrapper
   // HeadImgWrapper
      // HeadImg
   // HeadInfoDetail
      // HeadName
      // HeadDes
      // HeadContact