import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ScrollableAnchor from 'react-scrollable-anchor'

const Wrapper = styled.div`
  //background: #2bb7c6;
  background: url('/images/about-bg2.jpg');
  background-size: 100%;
  display:flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items:center;
`
const Container = styled.div`
  background: rgb(255, 255, 255, 0.8);
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

  &:hover {
    opacity: .3;
  }
`


class Projects extends Component {
  render() {
    return (
      <ScrollableAnchor id='projects'>
        <Wrapper>
          <Container>
            <ProjectLabel>
              I have two projects which are running on AWS and Heroku!!
            </ProjectLabel>
            <ProjectDesc>
              I learned React, Redux by making two projects, online chat room and Reddit like voting system.
              For online chat room, I used React, Redux, Socket.io and Node.js to build up this application, then I deployed the project to my AWS EC2 instance.
              For Reddit like voting system, I deployed it on the Heroku service.
            </ProjectDesc>
            <ProjectContainer>
              <a href='http://ec2-18-191-250-169.us-east-2.compute.amazonaws.com:3001/'>
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