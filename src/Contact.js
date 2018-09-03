import React, { Component } from 'react'
import styled from 'styled-components'
import ScrollableAnchor from 'react-scrollable-anchor'

const Wrapper = styled.div`
  background: green;
  height: 100vh;
`

class Contact extends Component {
  render() {
    return (
      <ScrollableAnchor id='contact'>
        <Wrapper>
          <div>Contact</div>
        </Wrapper>
      </ScrollableAnchor>
    )
  }

}

export default Contact