import styled from "styled-components";

export const TechWrapper = styled.div`
  
     
      display:grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 2rem;
      text-align: center;
      @media screen and (min-width: 1101px) {
            grid-template-columns: repeat(3, 1fr);
            grid-row-gap: 4rem;

          }
          @media screen and (max-width: 1100px) {
            grid-template-columns: repeat(2, 1fr);
            grid-row-gap: 4rem;
          }
          @media screen and (max-width: 992px) {
            grid-template-columns: repeat(2, 1fr);
            grid-row-gap: 4rem;
          }

          @media screen and (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
            grid-row-gap: 4rem;

           }

`
    export const TechBox = styled.div``
        export const TechName = styled.h2`
        
                font-size: clamp(2.5rem, 7vw, 2.5rem);
                margin: ${({ margin }) => (margin ? margin : "")};
                margin-bottom: ${({ mb }) => (mb ? mb : "")};
                margin-top: ${({ mt }) => (mt ? mt : "")};
                color:${(props)=> props.align ? props.align : '#FEFFFE'};
                text-align: ${(props)=> props.align };
        `
        export const TechEx = styled.span`
                font-size: clamp(1rem, 3vw, 1rem);
                margin: ${({ margin }) => (margin ? margin : "")};
                margin-bottom: ${({ mb }) => (mb ? mb : "")};
                margin-top: ${({ mt }) => (mt ? mt : "")};
                color:${(props)=> props.color ? props.color : '#FEFFFE'};
                text-align: ${(props)=> props.align };
`


// TechWrapper
   // TechBox
     // TechName
     // TechEx
