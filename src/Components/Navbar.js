import React from 'react';
import { Link } from 'react-router-dom';
import { Header, OutterUL, InnerUL, Item, StyledRoute, ImageDivAroundLogo, Label, Input } from '../Styled/index';
import SingleImage from './SingleImg';
  

const NavBar = (props) => {
  return (
    <Header>
      <Link to="/">
        <ImageDivAroundLogo>
          <SingleImage imgType="company_logo" />
        </ImageDivAroundLogo>
      </Link>
      <OutterUL>
        <Label htmlFor="toggle">&#9776;</Label>
        <Input id="toggle"/>
        <Item>
          <span>Services</span>
          <InnerUL>
            <li>
              <StyledRoute to='/translation'>Translation</StyledRoute>
            </li>
          </InnerUL>
        </Item>
        <Item>
          <span>About</span>
          <InnerUL>
            <li>
              <StyledRoute to='blog'>Blog</StyledRoute>
            </li>
          </InnerUL>
        </Item>
      </OutterUL>
    </Header>
  )
}

export default NavBar;
