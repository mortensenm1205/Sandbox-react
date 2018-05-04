import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { Card } from 'material-ui/Card';

/*
  BASE / ROOT STYLING
*/
export const Root = styled.div`
  padding: 2%;
`;

/*
  NAVBAR
*/
export const Header = styled.header``;

export const Nav = Header.extend``;

export const UL = styled.ul`
  padding: 0;
`;

export const Item = styled.li`
  padding: 0 3%;
  margin: 0 0 1.5%;
  list-style: none;
  cursor: pointer;
  border: ${props => props.logo ? "none" : "1px solid black"};
  font-size: 2em;
  text-align: center;

  &:hover ul li {
    display: block;
  }

  ul li {
    list-style: none;
    display: none;
    font-size: 0.8em;
  }

  span {
    line-height: 50px;
  }
`;

export const StyledRoute = styled(Link)`
  line-height: 50px;
  color: black;

  &:hover {
    text-decoration: none;
  }
`;

export const DivAroundLogo = styled.div`
  img {
    width: 90%;
    height: 100%;
  }
`;

/*
  BASE ELEMENTS
*/

export const Button = styled.button`
  width: ${props => props.full ? "45%" : "auto"};
  display: ${props => props.full ? "inline" : "block"};
  padding: 0.25em 1em;
  font-size: 1.5em;
  border-radius: 6px;
  background-color: #006dcc;
  color: white;
`;


/*
  COMPONENT SPECIFIC
*/

// MODALjs OUTTER DIV
export const ModalDiv = styled.div`
  display: inline;
`;

// MODAL-TYPEjs OUTTER DIV WITHIN HOME CONT.
export const ModalTypeDiv = styled.div`
  text-align: center;
`;

// CAROUSELjs OUTTER DIV
export const OutterCarouselDiv = styled.div`
  width: 100%;
  display: none;
`;

// CAROUSELjs SLIDER COMPONENT
export const CarouselDiv = styled(Slider)`
  margin: 2% 0;
`;

// CAROUSELjs IMG THAT BELONGS TO SLIDER COMPONENT
export const CarouselImg = styled.img`
  width: 100%;
  display: block;
`;

export const MainCard = styled(Card)`
  width: 95%;
`;
