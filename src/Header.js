import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { configureAnchors } from 'react-scrollable-anchor'

const Wrapper = styled.div`
  position: fixed;
  display: block; 
  padding: 0;
  width: 100%;
  top: 0;
  left: 0;
  text-align: center;
  background: white;
  z-index: 999;
  border-bottom: 3px solid #d9e0e0;
  height: 100px;
`
const Container = styled(Wrapper) `
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: Arial;
`

const HeaderName = styled.div`
  display: inline;
  font-size: 32px;
  color: #2bb7c6;
  margin-left: 5%;
`
const HeaderList = styled.div`
  display: flex;
  font-size: 24px;
  justify-content: space-around;
  align-items:center;
  color: #737777;
  width: 30%;
  height: 80px;
`
const HeaderListItem = styled.a`
  width: 80px;
  text-align: center;
  color: #737777;
  text-decoration: none;

  &:hover{
    color: #262324;
  }
`


class Header extends Component {
  componentDidMount() {
    configureAnchors({ offset: -50, scrollDuration: 1000 })
  }

  render() {
    return (
      <Wrapper>
        <Container>
          <HeaderName>
            <p>Chih-Sheng Huang</p>
          </HeaderName>
          <HeaderList>
            <HeaderListItem href='#about'>About</HeaderListItem>
            <HeaderListItem href='#projects'>Projects</HeaderListItem>
            <HeaderListItem href='#skills'>Skills</HeaderListItem>
            <HeaderListItem href='#contact'>Contact</HeaderListItem>
          </HeaderList>
        </Container>
      </Wrapper>
    );
  }
}

export default Header;