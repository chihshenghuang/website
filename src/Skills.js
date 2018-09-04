import React, { Component } from 'react'
import styled from 'styled-components'
import ScrollableAnchor from 'react-scrollable-anchor'

const Wrapper = styled.div`
  background: url('/images/about-bg3.jpg');
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 100%;
`

const Container = styled.div`
  background: rgb(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 40px 30px;
  width: 80%;
  height: 400px;
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

const SkillImage = styled.img`
  display: inline-block;
  width: 150px;
  border-radius: 50%;
`

class Skills extends Component {
  render() {
    return (
      <ScrollableAnchor id='skills'>
        <Wrapper>
          <Container>
            <SkillImage src={'/images/react.png'} />
            <SkillImage src={'/images/redux.png'} />
            <SkillImage src={'/images/html.png'} />
            <SkillImage src={'/images/css.png'} />
            <SkillImage src={'/images/js.jpg'} />
            <SkillImage src={'/images/git.png'} />
            <SkillImage src={'/images/jquery.jpg'} />
            <SkillImage src={'/images/aws.jpg'} />
            <SkillImage src={'/images/docker.jpg'} />
            <skillImage src={'/images/swagger.png'} />
          </Container>
        </Wrapper>
      </ScrollableAnchor>
    )
  }
}

export default Skills;