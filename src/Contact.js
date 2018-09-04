import React, { Component } from 'react'
import styled from 'styled-components'
import ScrollableAnchor from 'react-scrollable-anchor'

const Wrapper = styled.div`
  background: url('/images/contact-bg-blur.jpg') no-repeat;
  height: 100vh;
  width:100%;
  display:flex;
  justify-content: center;
  align-items: center;
  background-size: 100%;
`

const Container = styled.div`
  border-radius: 10px;
  padding: 40px 30px;
  width: 80%;
  height: 400px;
  text-align: center;
`
const ContactLabel = styled.div`
  font-size: 36px;
  margin: 20px;
  color: white;
`
const ContactDesc = styled.div`
  font-size: 24px;
  margin: 20px;
  color: white;
`
const ContactImage = styled.img`
  display:inline-block;
  width: 150px;
  margin: 20px;
  border-radius: 50%;
`


class Contact extends Component {
  render() {
    return (
      <ScrollableAnchor id='contact'>
        <Wrapper>
          <Container>
            <ContactLabel>Contact Me!</ContactLabel>
            <ContactDesc>You can reach me by using Linkedin, G-Mail and Github!</ContactDesc>
            <ContactImage src={'/images/linkedin.png'} />
            <ContactImage src={'/images/gmail.png'} />
            <ContactImage src={'/images/github-logo.png'} />
          </Container>
        </Wrapper>
      </ScrollableAnchor>
    )
  }

}

export default Contact