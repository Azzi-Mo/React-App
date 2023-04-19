import React from "react";
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
              ProjectTechName, 
            ProjectView
} from './ProjectsStyle'
import { projectData } from "../../data/ProjectsData";

const renderNestedData = (obj)=> {





}

export const  Projects = () => {
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

          
            

        
        {projectData.map((item)=> (
          
          
            <ProjectsInfoBox key={item.id} item={item}>
                <ProjectImgWrapper>

                  <ProjectImg></ProjectImg>
        
                </ProjectImgWrapper>

                <ProjectName ></ProjectName>
                <ProjectTech>
                
                      <ProjectTechName ></ProjectTechName>
                    
                </ProjectTech>
                <ProjectView></ProjectView>
            </ProjectsInfoBox>

                 ))}

              

  

        

        </ProjectsWrapper>

    </Container>
  </Section>
  )
}

