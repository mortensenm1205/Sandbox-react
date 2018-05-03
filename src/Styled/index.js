import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  &:after {
    content: "";
    clear: both;
    display: table;
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
