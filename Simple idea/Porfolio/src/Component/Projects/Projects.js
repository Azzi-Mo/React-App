import React, { useEffect } from "react";
import {Container , Section} from '../../globalStyle'
import {
    ProjectTeaxtWrapper,
        ProjectTitle,
        ProjectContactSpan,
    ProjectsWrapper,
        ProjectsInfoBox,
            ProjectImgWrapper,
              ProjectImg, 
            ProjectName, 
            ProjectTech,
            ProjectView
} from './ProjectsStyle'
import { projectData } from '../../data/ProjectsData'
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";


export const  Projects = ({img,  alt}) => {
  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);

  return (
    <Section smPadding="50px 10px" position="relative" id="Projects" ref={ref}>
      <Container>
          <ProjectTeaxtWrapper>

              <ProjectTitle>Projects</ProjectTitle>
              <ProjectContactSpan>CONTACT ME</ProjectContactSpan>

          </ProjectTeaxtWrapper>
              
          {
            // Porject box
          }
          <ProjectsWrapper>  

            {projectData.map((el)=>
              

           (   <ProjectsInfoBox key={el.id} img={el.img}>
                  
                   <ProjectImgWrapper>

                      <ProjectImg 
                      src={img} 
                      alt={alt}
                      whileHover={{ rotate: 2, scale: 1.02 }}
                      transition={{ duration: 0.5 }}
                      ></ProjectImg>
                   
                   </ProjectImgWrapper>
                   <ProjectName ></ProjectName>
                   <ProjectTech></ProjectTech>
                   <ProjectView></ProjectView>
   
                </ProjectsInfoBox>)

              )}
          

          </ProjectsWrapper>

      </Container>
    </Section>
  )
}

