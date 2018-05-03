import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  &:after {
    content: "";
    clear: both;
    display: table;
    height: 75px;
  }
`;

export const Item = styled.li`
  float: left;
  padding: 0 3%;
  list-style: none;
  cursor: pointer;

  &:hover ul li {
    display: block;
  }

  ul li {
    list-style: none;
    display: none;
  }
`;

export const StyledRoute = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

export const Button = styled.button`
  padding: 0.25em 1em;
  font-size: 2em;
  border-radius: 6px;
  background-color: #006dcc;
  color: white;
`;
