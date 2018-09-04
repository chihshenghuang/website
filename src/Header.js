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
  background: rgb(0, 0, 0, 0.35);
  z-index: 999;
  //border-bottom: 3px solid #d9e0e0;
  height: 80px;
`
const Container = styled(Wrapper) `
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: Arial;
`

const HeaderName = styled.div`
  display: inline;
  font-size: 26px;
  color: #e0e2e2;
  margin-left: 5%;
`
const HeaderList = styled.div`
  display: flex;
  font-size: 22px;
  justify-content: space-around;
  align-items:center;
  color: white;
  width: 30%;
  height: 80px;
`
const HeaderListItem = styled.a`
  width: 80px;
  text-align: center;
  color: white;
  text-decoration: none;

  &:hover{
    color: #EFDD8D;
  }
`


class Header extends Component {
  componentDidMount() {
    configureAnchors({ offset: 0, scrollDuration: 1000 })
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