import React, { Component } from 'react'
import styled from 'styled-components'
import ScrollableAnchor from 'react-scrollable-anchor'

const Wrapper = styled.div`
  background: white;//url('/images/about-bg6-blur.jpg');
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  background: url('/images/skills-bg2-small.jpg');
  background-size: 100%;
`

/*
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
*/
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
          </Container>
        </Wrapper>
      </ScrollableAnchor>
    )
  }
}

export default Skills;