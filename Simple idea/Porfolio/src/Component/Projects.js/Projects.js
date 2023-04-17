import React from 'react'
import {Container , Section} from '../../globalStyle'
import {
    ProjectTeaxtWrapper,
        ProjectTitle,
        ProjectContactSpan,
    ProjectsWrapper,
        ProjectsInfoBox,
            ProjectName, 
            ProjectTech,
            ProjectView
} from './ProjectsStyle'
function projects() {
  return (
    <Section>
      <Container>
          <ProjectTeaxtWrapper>

              <ProjectTitle></ProjectTitle>
              <ProjectContactSpan></ProjectContactSpan>

          </ProjectTeaxtWrapper>
              
          <ProjectsWrapper>
          
             <ProjectsInfoBox>
             
                 <ProjectName ></ProjectName>
                <ProjectTech></ProjectTech>
                <ProjectView></ProjectView>
                
             </ProjectsInfoBox>

          </ProjectsWrapper>
      </Container>
    </Section>
  )
}

export default projects


