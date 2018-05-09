import React from 'react';
<<<<<<< HEAD
import { Header, Nav, UL, Item, StyledRoute, ImageDivAroundLogo, Label, Input } from '../Styled/index';

=======
import { Link } from 'react-router-dom';
import { Header, OutterUL, InnerUL, Item, StyledRoute, ImageDivAroundLogo, Label, Input } from '../Styled/index';
import SingleImage from './SingleImg';
  
>>>>>>> aac5343174404823bb978a4edca1f83b3a6e4d68

const NavBar = (props) => {
  return (
    <Header>
      <Nav>
        <UL>
          <Item logo>
            <StyledRoute to="/">
              <ImageDivAroundLogo>
                <SingleImage imgType="company_logo" />
              </ImageDivAroundLogo>
            </StyledRoute>
          </Item>
          <Label htmlFor="toggle">&#9776;</Label>
          <Input id="toggle"/>
          <Item>
            <span>Services</span>
            <UL>
              <li>
                <StyledRoute to='/translation'>Translation</StyledRoute>
              </li>
            </UL>
          </Item>
          <Item>
            <span>About</span>
            <UL>
              <li>
                <StyledRoute to='blog'>Blog</StyledRoute>
              </li>
            </UL>
          </Item>
        </UL>
      </Nav>
    </Header>
  )
}

export default NavBar;
