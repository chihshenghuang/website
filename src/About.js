import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  background: white;
  display: block;
  width: 100%;
  top: 100px;
  margin-top: 100px;
  left: 0;
  margin-left: 0;
`

const Container = styled.div`
  height: 800px;
  padding: 10px 10px;
`

const ProfileImage = styled.img`
  width: 300px;
  border-radius: 50%;
`

class About extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <ProfileImage src={'/images/photo.JPG'} />
          <span>Hi, I am Chih-Sheng!</span>
        </Container>
      </Wrapper>
    );
  }
}

export default About;