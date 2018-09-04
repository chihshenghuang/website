import React, { Component } from 'react'
import styled from 'styled-components'
import ScrollableAnchor from 'react-scrollable-anchor'

const Wrapper = styled.div`
  background: url('/images/contact-bg.jpg') no-repeat;
  height: 100vh;
  width:100%;
  display:flex;
  justify-content: center;
  align-items: center;
  background-size: 100%;
`

const Container = styled.div`
  background: rgb(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 40px 30px;
  width: 80%;
  height: 400px;
`

class Contact extends Component {
  render() {
    return (
      <ScrollableAnchor id='contact'>
        <Wrapper>
          <Container>
          </Container>
        </Wrapper>
      </ScrollableAnchor>
    )
  }

}

export default Contact