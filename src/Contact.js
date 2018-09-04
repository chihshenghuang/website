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
  margin-bottom: 50px;
  color: white;
`
const ContactDesc = styled.div`
  font-size: 20px;
  margin: 15px;
  color: white;
`
const ContactImage = styled.img`
  display:inline-block;
  width: 100px;
  margin: 40px 20px;
  border-radius: 50%;
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
            <ContactDesc>If you have any questions about me, please feel free to send me an e-mail to huangcs@seas.upenn.edu.</ContactDesc>
            <ContactDesc>Or you can reach me by using Linkedin, Fackbook, Instagram and GitHub!</ContactDesc>
            <div>
              <a href='https://www.linkedin.com/in/ChihShengHuang'>
                <ContactImage src={'/images/linkedin.png'} />
              </a>
              <a href='https://www.facebook.com/pedoe.william'>
                <ContactImage src={'/images/facebook.png'} />
              </a>
              <a href='https://www.instagram.com/pedoe1989/'>
                <ContactImage src={'/images/ig.gif'} />
              </a>
              <a href='https://github.com/pedoe'>
                <ContactImage src={'/images/github-logo.png'} />
              </a>
              <a href='mailto:huangcs@seas.upenn.edu'>
                <ContactImage src={'/images/gmail.gif'} />
              </a>
            </div>
          </Container>
        </Wrapper>
      </ScrollableAnchor>
    )
  }

}

export default Contact