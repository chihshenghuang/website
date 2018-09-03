import React, { Component } from 'react'
import styled from 'styled-components'
import ScrollableAnchor from 'react-scrollable-anchor'

const Wrapper = styled.div`
  background: blue;
  height: 100vh;
`

class Skills extends Component {
  render() {
    return (
      <ScrollableAnchor id='skills'>
        <Wrapper>
          <div>Skills</div>
        </Wrapper>
      </ScrollableAnchor>
    )
  }
}

export default Skills;