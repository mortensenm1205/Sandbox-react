import React from 'react';
import { Header, Nav, UL, Item, StyledRoute, DivAroundLogo } from '../Styled/index';
import styled from 'styled-components';


const NavBar = (props) => {
  return (
    <Header>
      <Nav>
        <UL>
          <Item logo>
            <StyledRoute to="/">
              <DivAroundLogo>
                <img alt="Logo" src="https://www.freelogodesign.org/img/logo-ex-5.png" />
              </DivAroundLogo>
            </StyledRoute>
          </Item>
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
