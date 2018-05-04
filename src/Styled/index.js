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
  text-align: center;
`;

export const Item = styled.li`
  padding: 0 3%;
  margin: 0 0 1.5%;
  list-style: none;
  cursor: pointer;
  border-bottom: ${props => props.logo ? "none" : "1px solid #eaeaeb"};
  font-size: 2em;

  &:hover li {
    display: block;
  }

  li {
    list-style: none;
    display: none;
    font-size: 0.8em;
  }

  span {
    line-height: 50px;
  }
`;

export const Label = styled.label`
  margin: 5% 0 0;
  font-size: 1.8em;
  cursor: pointer;
`;

export const Input = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;

  & ~ ${Item} {
    display: none;
  }

  &:checked ~ ${Item} {
    display: block;
  }
`;

export const StyledRoute = styled(Link)`
  line-height: 50px;
  color: black;

  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
`;


/*
  BASE ELEMENTS or MULTIPLE USE COMPONENTS
*/

export const Button = styled.button`
  width: ${props => props.full ? "45%" : "100%"};
  display: ${props => props.full ? "inline" : "block"};
  padding: 0.25em 1em;
  font-size: 1.5em;
  border-radius: 6px;
  background-color: #006dcc;
  color: white;
`;

//THIS IS REALLY ONLY APPLICABLE TO OUR SINGLE IMAGE //COMPOENT
export const DivAroundImages = styled.div`
  text-align: center;

  img {
    width: 98%;
    height: 100%;
  }
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
  z-index: 1;
  text-align: center;
  position: relative;
  top: 175px;
`;

// CAROUSELjs OUTTER DIV
export const OutterCarouselDiv = styled.div`
  width: 100%;
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

// POSTCARDjs ROOT CARD JSX FOR MOBILE
export const MainCard = styled(Card)`
  width: 95%;
`;
