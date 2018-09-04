import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ScrollableAnchor from 'react-scrollable-anchor'

const Wrapper = styled.div`
  //background: #2bb7c6;
  background: url('/images/about-bg2-blur2.jpg');
  background-size: 100%;
  display:flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items:center;
`
const Container = styled.div`
  background: rgb(255, 255, 255);
  opacity: 0.9; // For Safari
  border-radius: 10px;
  padding: 40px 30px;
  width: 80%;
  height: 400px;
  letter-spacing: 0.5px;
  line-height: 150%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
`

const ProjectLabel = styled.div`
  font-size: 24px;
  margin: 10px 0;
  color: #585354;
`
const ProjectLabelSmall = styled.div`
  font-size: 20px;
  color: #585354;
`
const ProjectDesc = styled.div`
  font-size: 16px;
  color: #737777;
  width: 800px;
  margin: 20px 0;
`

const ProjectContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`
const ProjectImage = styled.img`
  display: inline-block;
  width: 420px;
  height: 220px;
  background-size: 100%;
  border-radius: 5px;
  &:hover {
    opacity: .3;
  }
`
const ProjectDescHighlight = styled.span`
  color: #2bb7c6;
`

class Projects extends Component {
  render() {
    return (
      <ScrollableAnchor id='projects'>
        <Wrapper>
          <Container>
            <ProjectLabel>
              My Projects
            </ProjectLabel>
            <ProjectDesc>
              I learned {<ProjectDescHighlight>React</ProjectDescHighlight>}, {<ProjectDescHighlight>Redux</ProjectDescHighlight>} by making two projects, online chat room and Reddit like voting system.
              For online chat room, I used React, Redux, Socket.io and Node.js to build up this application, then I deployed the project to my {<ProjectDescHighlight>AWS EC2</ProjectDescHighlight>} instance.
    For Reddit like voting system, I deployed it on the {<ProjectDescHighlight>Heroku</ProjectDescHighlight>} service.
            </ProjectDesc>
            <ProjectContainer>
              <a href='http://ec2-18-191-250-169.us-east-2.compute.amazonaws.com/'>
                <ProjectImage src='/images/project1.png' />
              </a>
              <a href='https://powerful-mountain-27404.herokuapp.com/login'>
                <ProjectImage src='/images/project2-1.png' />
              </a>
            </ProjectContainer>
          </Container>
        </Wrapper>
      </ScrollableAnchor>
    )
  }

}

export default Projects;