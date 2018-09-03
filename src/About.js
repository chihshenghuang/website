import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ScrollableAnchor from 'react-scrollable-anchor'

const Wrapper = styled.div`
  background: white;
  display: block;
  width: 100%;
  left: 0;
  margin-top: 100px;
  margin-left: 0;
  height: 100vh;
`

const Container = styled(Wrapper) `
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  height: 550px;
  padding-left: 5%;
  line-height: 165%;
`

const ProfileImage = styled.img`
  display: inline-block;
  width: 320px;
  border-radius: 50%;
  margin: 30px 50px;
`

const ProfileContainer = styled.div`
  width: 400px;
  margin: 10px 10px;
  color: #686465;
`
const ProfileLabel = styled.label`
  font-size: 24px;
  color: #585354;
`

const ProfileDesc = styled.p`
  font-size: 16px;
  height: 300px;
  width: 500px;
`
const ProfileDescHighlight = styled.span`
  color: #2bb7c6;
`


class About extends Component {
  render() {
    return (
      <ScrollableAnchor id='about'>
        <Wrapper>
          <Container>
            <ProfileImage src={'/images/photo.JPG'} />
            <ProfileContainer>
              <ProfileLabel>Hi, I am Chih Sheng!</ProfileLabel>
              <ProfileDesc>
                I am an enthusiastic {<ProfileDescHighlight> software engineer with more than 2.5 years of experience </ProfileDescHighlight>} in custom application development,
                          such as Web application development and Mobile Apps development.
                          Previously employed at Change Healthcare, which is one of the largest healthcare technology companies in the United States,
                          I participated the medical payment system development as a front-end developer.
              I am primarily focused on building web application by integrating various modern technologies and frameworks such as {<ProfileDescHighlight>React</ProfileDescHighlight>}, {
                  <ProfileDescHighlight>Redux</ProfileDescHighlight>}, {<ProfileDescHighlight>Express</ProfileDescHighlight>}, {<ProfileDescHighlight>Webpack</ProfileDescHighlight>}, {<ProfileDescHighlight>Node.js</ProfileDescHighlight>}, and {
                  <ProfileDescHighlight>AWS</ProfileDescHighlight>}, also I used CI/CD tools like {
                  <ProfileDescHighlight>Jenkins</ProfileDescHighlight>} and {
                  <ProfileDescHighlight>GitLab</ProfileDescHighlight>} to integrate auto testing and deployment.
I have hands-on experience in all stages of front-end application development, including requirement definition,
REST APIs design, testing and support.
                Now, I am pursuing my master degree in {<ProfileDescHighlight>Scientific Computing</ProfileDescHighlight>} from {<ProfileDescHighlight>University of Pennsylvania</ProfileDescHighlight>}.
            </ProfileDesc>
            </ProfileContainer>
          </Container>
        </Wrapper>
      </ScrollableAnchor>
    );
  }
}

export default About;