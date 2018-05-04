import React from 'react';
import { Header, Nav, UL, Item, StyledRoute, DivAroundImages, Label, Input } from '../Styled/index';
import SingleImage from './SingleImg';


const NavBar = (props) => {
  return (
    <Header>
      <Nav>
        <UL>
          <Item logo>
            <StyledRoute to="/">
              <DivAroundImages>
                <SingleImage imgType="company_logo" />
              </DivAroundImages>
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
              <li>
                <StyledRoute to='ourTeam'>Our Team</StyledRoute>
              </li>
            </UL>
          </Item>
        </UL>
      </Nav>
    </Header>
  )
}

export default NavBar;
