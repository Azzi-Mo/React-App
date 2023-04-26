import styled from "styled-components";
import { Container } from "../../globalStyle";

export const cont = styled(Container)`

 position: relative;

`

export const HeadInfoWrapper = styled.div`

   display: grid;
	grid-template-columns: repeat(3, 1fr);
   /* height: 100vh; */
          @media screen and (max-width: 1100px) {
            grid-template-columns: repeat(3, 1fr);
            /* grid-row-gap: 4rem; */
          }
          @media screen and (max-width: 992px) {
            grid-template-columns: repeat(1, 1fr);
          }

          /* @media screen and (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);

           } */
           `

    export const HeadImgWrapper = styled.div`
    

          display:grid;
          grid-column: 3/4;
          order: 2;
          justify-content: center;
          align-items: center;
          max-height: 600px;
	       position: relative;
          @media screen and (max-width: 992px) {
          order: 1;
          grid-column: 1/3;
          justify-content: center;

           }

    `
          export const HeadImg = styled.img`
               position: relative;
               top: -48px;
               padding-right: 0;
               border: 0;
               /* vertical-align: middle; */
               /* display: inline-block; */
               /* object-fit: cover; */
               max-height: 600px;
               z-index: 1;
               border-radius: 5px;
               width: 100%;
               @media screen and (max-width: 992px) {
           }

          `
   export const HeadInfoDetail= styled.div`
   
                    position: relative;
                    max-width: 100%;
                    order: 1;
                    display: grid;
                    align-items: center;
                    align-content: center;
                    grid-column: 1/3;
                    @media screen and (max-width: 992px) {

                     order: 2;
                     grid-column: 2/3;
                     justify-content: center;
                     align-items: center;
                     /* text-align: center; */

                     }

   `

         export const HeadNameWrapper = styled.div`
                    padding-bottom: ${({ pb }) => (pb ? pb : "")};
                     padding-top: ${({ pt }) => (pt ? pt : "")};
                     @media screen and (max-width: 992px){
                        margin-bottom: ${({ mb }) => (mb ? mb : "")};
                     margin-top: ${({ mt }) => (mt ? mt : "")};
                     }
                    `

                  export const HeadName = styled.span`
                     font-size: clamp(3.5rem, 7vw, 2.5rem);
                     margin: ${({ margin }) => (margin ? margin : "")};
                     color:${(props)=> props.align ? props.align : '#FEFFFE'};
                     text-align: ${(props)=> props.align };
                     letter-spacing: .1rem;
                     line-height: 4rem;
                     font-weight: 700;
                     width: 70%;
                     span{
                        border-bottom: 5px solid  #4CE3A0;
                     }
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
                        font-size: clamp(2.5rem, 5vw, 2rem);
                        letter-spacing: .1rem;
                        line-height: 3rem;
                        font-weight: 700;
                     }

                     @media screen and (max-width: 768px) {
                        grid-template-columns: repeat(1, 1fr);
                        grid-row-gap: 4rem;
                        margin-bottom: ${({ mb }) => (mb ? mb : "")};
                        margin-top: ${({ mt }) => (mt ? mt : "")};
                     }`
         export const HeadDes = styled.div`
         
                     font-size: clamp(.5rem, 2.5vw, 1.5rem);
                     margin: ${({ margin }) => (margin ? margin : "")};
                     margin-bottom: ${({ mb }) => (mb ? mb : "")};
                     margin-top: ${({ mt }) => (mt ? mt : "")};
                     color:${(props)=> props.align ? props.align : '#FEFFFE'};
                     text-align: ${(props)=> props.align };
                     @media screen and (max-width: 992px) {

                        margin-bottom: ${({ mb }) => (mb ? mb : "")};
                        margin-top: ${({ mt }) => (mt ? mt : "")};
                        font-size: clamp(1.1rem, 2vw, 2rem);
                        letter-spacing: .1rem;
                        line-height: 1.5rem;
                        /* font-weight: 100; */
                     }

         `
         export const HeadContact = styled.a`
         
                     
                     font-size: clamp(1rem, 2.3vw, 2rem);
                     padding-top: ${({ pt }) => (pt ? pt : "")};
                     padding-bottom: ${({ pb }) => (pb ? pb : "")};;
                     margin: ${({ margin }) => (margin ? margin : "")};
                     margin-bottom: ${({ mb }) => (mb ? mb : "")};
                     margin-top: ${({ mt }) => (mt ? mt : "")};
                     color:${(props)=> props.align ? props.align : '#FEFFFE'};
                     text-align: ${(props)=> props.align };
                     text-decoration: none;
                     border-bottom: 2px solid rgb(76, 227, 160);
                     width: fit-content;

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