import React from 'react';
import { Header, Item, StyledRoute } from '../Styled/index';
import styled from 'styled-components';


const NavBar = () => {
  return (
    <Header>
      <nav>
        <ul>
          <Item>
            <StyledRoute to="/">Home</StyledRoute>
          </Item>
          <Item>
            <span>Services</span>
            <ul>
              <li>
                <StyledRoute to='/translation'>Translation</StyledRoute>
              </li>
            </ul>
          </Item>
          <Item>
          <span>About</span>
            <ul>
              <li>
                <StyledRoute to='blog'>Blog</StyledRoute>
              </li>
              <li>
                <StyledRoute to='ourTeam'>Our Team</StyledRoute>
              </li>
            </ul>
          </Item>
        </ul>
      </nav>
    </Header>
  )
}

export default NavBar;
