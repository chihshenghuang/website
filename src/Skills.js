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
  text-align: center;
`
const SkillsLabel = styled.div`
  color: white;
  font-size: 36px;
  margin: 100px 0;
`

class Skills extends Component {
  render() {
    return (
      <ScrollableAnchor id='skills'>
        <Wrapper>
          <Container>
            <SkillsLabel>My Software Skills</SkillsLabel>
          </Container>
        </Wrapper>
      </ScrollableAnchor>
    )
  }
}

export default Skills;