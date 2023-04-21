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
import { ProjectData } from "../../data/ProjectsData";

function TechList({ tech }) {
  return (
    <ul>
      {tech[0] &&
        Object.values(tech[0]).map((value) => (
          <ProjectTechName   key={value} className="ProjectTechName">{value}</ProjectTechName>
        ))}
    </ul>
  );
}



function InfoBox({ project }) {
  return (
  
            <ProjectsInfoBox className="box">

               <ProjectImgWrapper>

                  <ProjectImg src={project.img}></ProjectImg>
      
               </ProjectImgWrapper>

               <ProjectName align='#FEFFFE' mb='15px' mt='15px'>{project.name}</ProjectName>
               <ProjectTech className="ul">
              
                     <TechList tech={project.tech}></TechList>
                  
               </ProjectTech>
               <ProjectView mb='10px' mt='10px' href={project.soursCode}>Source code</ProjectView>

           </ProjectsInfoBox>
        
  );
}


export const  Projects = () => {

  return (
    <Section smPadding="50px 10px" position="relative" id="Projects" >
    <Container className="cont">

        <ProjectTeaxtWrapper>

            <ProjectTitle>Projects</ProjectTitle>
            <ProjectContactSpan>CONTACT ME</ProjectContactSpan>

        </ProjectTeaxtWrapper>
            
      
        <ProjectsWrapper className="ProjectsWrapper">  

          {ProjectData.map((project) => (
            <InfoBox key={project.id} project={project} />
          ))}

       </ProjectsWrapper>

    </Container>
  </Section>
  )
}

