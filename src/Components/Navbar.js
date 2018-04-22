import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            Services
            <ul>
              <li>
                <Link to='/translation'>Translation</Link>
              </li>
              <li>
                <Link to='/interpretation'>Interpretation</Link>
              </li>
            </ul>
          </li>
          <li>
            About
            <ul>
              <li>
                <Link to='blog'>Blog</Link>
              </li>
              <li>
                <Link to='ourTeam'>Our Team</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar;
