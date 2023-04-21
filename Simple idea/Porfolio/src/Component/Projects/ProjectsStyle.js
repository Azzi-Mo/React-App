import styled from "styled-components";
import { motion } from 'framer-motion';


export const ProjectTeaxtWrapper = styled.div``
    export const ProjectTitle = styled.div``
    export const ProjectContactSpan = styled.span``
export const ProjectsWrapper = styled.div`

            display: grid;
            grid-template-columns: repeat(1, 1fr);
            margin-top: 4rem;
            margin-bottom: 4rem;
            grid-gap: 4rem;
          @media screen and (min-width: 1101px) {
            grid-template-columns: repeat(2, 1fr);
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
    export const ProjectsInfoBox = styled.div`
    
            display: grid;
            grid-template-columns: repeat(1, 1fr);

            
    `

        export const ProjectImgWrapper = styled(motion.div)`
                 	display: flex;
                  justify-content: 'flex-end';
                  max-height: 700px;
                  justify-content: center;
                  position: relative;
                  
                  `
            export const ProjectImg = styled(motion.img)`
                  /* border: 1px solid red; */
                  padding-right: 0;
                  border: 0;
                  max-width: 100%;
                  vertical-align: middle;
                  display: inline-block;
                  object-fit: cover;
                  max-height: 700px;
                  z-index: 1;
            `
        export const ProjectName = styled.div`
        
                font-size: clamp(1rem, 5vw, 1.3rem);
                margin: ${({ margin }) => (margin ? margin : "")};
                margin-bottom: ${({ mb }) => (mb ? mb : "")};
                margin-top: ${({ mt }) => (mt ? mt : "")};
                color:${(props)=> props.align ? props.align : '#FEFFFE'};
                text-align: ${(props)=> props.align };

        `
        export const ProjectTech = styled.div`
              ul{
                display: grid;
                width: fit-content;
                grid-template-columns: repeat(6,1fr);
                column-gap: 20px ;
                /* grid-gap: 1rem; */
                padding: 0;
                margin: 0;
                text-align: center;
              }
        `
           export const ProjectTechName = styled.span`
               
               
                font-size: clamp(.5rem, 5vw, 1rem);
                
                margin: ${(props)=> props.margin };
                margin-bottom: ${({ mb }) => (mb ? mb : "")};
                margin-top: ${({ mt }) => (mt ? mt : "")};
                color:${(props)=> props.align ? props.align : '#FEFFFE'};
                letter-spacing: 0.1rem;
                text-align: ${(props)=> props.align };

           `
        export const ProjectView = styled.a`
        
               font-size: clamp(.5rem, 5vw, 1rem);
                margin: ${({ margin }) => (margin ? margin : "")};
                margin-bottom: ${({ mb }) => (mb ? mb : "")};
                margin-top: ${({ mt }) => (mt ? mt : "")};
                color:${(props)=> props.align ? props.align : '#FEFFFE'};
                letter-spacing: 0.1rem;
                text-align: ${(props)=> props.align };
                border-bottom: 1px solid #4CE3A0;
                width: fit-content;
                text-decoration: none;


        `


// ProjectTeaxtWrapper
  // ProjectTitle
  // ProjectContactSpan
// ProjectsWrapper
  // ProjectsInfoBox
        // ProjectImgWrapper
        // ProjectImg
        // ProjectName
        // ProjectTech
             //ProjectTechName 
        // ProjectView
