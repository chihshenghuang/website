import React, { Component } from 'react'
import styled from 'styled-components'
import ScrollableAnchor from 'react-scrollable-anchor'

const Wrapper = styled.div`
  background: url('/images/contact-bg-blur2.jpg') no-repeat;
  height: 100vh;
  width:100%;
  display:flex;
  justify-content: center;
  align-items: center;
  background-size: 100%;
`

const Container = styled.div`
  border-radius: 10px;
  width: 80%;
  height: 400px;
  text-align: center;
`
const ContactLabel = styled.div`
  margin-top: 120px;
  font-size: 36px;
  margin: 30px;
  color: white;
`
const ContactDesc = styled.div`
  font-size: 24px;
  margin: 30px;
  color: white;
`
const ContactImage = styled.img`
  display:inline-block;
  width: 130px;
  margin: 30px;
  border-radius: 50%;
  &:hover {
    transform: scale(1.2);
    transition: 0.8s;
  }
`
const ContactImageSqure = styled.img`
  display: inline-block;
  width: 140px;
  height: 120px;
  margin: 30px;
  &:hover {
    transform: scale(1.2);
    transition: 0.8s;
  }
`


class Contact extends Component {
  render() {
    return (
      <ScrollableAnchor id='contact'>
        <Wrapper>
          <Container>
            <ContactLabel>Contact Me!</ContactLabel>
            <ContactDesc>You can reach me by using Linkedin, E-Mail and Github!</ContactDesc>
            <a href='https://www.linkedin.com/in/ChihShengHuang'>
              <ContactImageSqure src={'/images/linkedin.png'} />
            </a>
            <a href='mailto:huangcs@seas.upenn.edu'>
              <ContactImage src={'/images/gmail.png'} />
            </a>
            <a href='https://github.com/pedoe'>
              <ContactImage src={'/images/github-logo-black.png'} />
            </a>
          </Container>
        </Wrapper>
      </ScrollableAnchor>
    )
  }

}

export default Contact