import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ScrollableAnchor from 'react-scrollable-anchor'

const Wrapper = styled.div`
  background: #2bb7c6;
  display:block;
  width: 100%;
  height: 100vh;
  opacity:.8;
`
const container = styled.div`
 background: white;
 
`



class Projects extends Component {
  render() {
    return (
      <ScrollableAnchor id='projects'>
        <Wrapper>
          <div>Projects</div>
        </Wrapper>
      </ScrollableAnchor>
    )
  }

}

export default Projects;