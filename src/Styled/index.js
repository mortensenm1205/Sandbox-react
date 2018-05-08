import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { Card } from 'material-ui/Card';

/*
  BASE / ROOT STYLING
*/
export const Root = styled.div`
  max-width: 1100px;
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
// FOR DIV AROUND LOGO IMAGE IN NAVBARjs
export const ImageDivAroundLogo = styled.div`
  text-align: center;

  img {
    width: 98%;
    height: 100%;

    @media (min-width: 800px) {
      width: 50%;
    }
  }
`;
// LI ELEMENTS ON THE NAV BUT NOT THE INNER LI EL'S
// BUT WE DO TARGET IT AND OTHER CHILD EL'S OF ITEM
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

  @media ( min-width:800px ) {
    display: inline-block;
  }
`;


// FOR THE MOBILE MENU, IT BELONGS TO INPUT
// HIDING IT AFTER 800PX
export const Label = styled.label`
  margin: 5% 0 0;
  font-size: 1.8em;
  cursor: pointer;

  @media (min-width: 800px) {
    display: none;
  }
`;
//THE INPUT THAT TURNS THE MENU ON AND OFF
//WE HAVE TO TARGET THE SIBLING ITEMS AFTER
//THIS INPUT TO GET THEM TO HIDE
//..AT THIS TIME TRYING TO HAVE THEM HOVER
//CORRECTLY IS DIFFICULT
export const Input = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;

  & ~ ${Item} {
    display: none;

    @media (min-width: 800px) {
      display: inline-block;
      border: 2px solid red;
    }
  }

  &:checked ~ ${Item} {
    display: block;
  }
`;

//THIS IS THE LINK EL THAT GOES WITH ROUTER
//I WAS THINKING THAT I MAY HAVE TO TARGET
//SOME INNER ELEMENTS HERE.
export const StyledRoute = styled(Link)`
  line-height: 50px;
  color: black;

  &:hover {
    text-decoration: none;
    cursor: pointer;
  }

  @media (min-width: 800px) {
    display: inline-block;
  }
`;


/*
  HOME PAGE
*/

//HOME PAGE DIV, NEEDED MY MODAL BUTTON TO
//POSITION ITSELF AROUND THIS DIV
export const OutterHomeDiv = styled.div`
  width: 100%;
  position: relative;
`;
// ALL THIS IS DOING IS SETTING UP THE
// OUR CLIENTS SECTION WITHIN HOMEjs
export const OurClientsImageDiv = styled.div`
  text-align: center;
  img {
    width: 55%;
    margin: 20px 0;
  }
`;
// HANDLING THE CONTEXT HEADINGS IN HOMEjs
export const ContextHeading = styled.h3`
  text-align: center;
  font-size: 2.2em;
  font-weight: bold;
  margin: 35px 0;
`;
// NEEDED TO EXTEND SOME STYLES ON A CERTAIN
// COMPONENT TO WORK WITH THE FOOTER
export const CustomContextHeading = ContextHeading.extend`
  padding-top: 25px;
`;

// TO KEEP THE LOOK OF SEPERATED COMPONETS
export const SeperatedDiv = styled.div`
  background-color: #e8e8e8ba;
  padding: 0 0 55px;
`;


/*
  FOOTER
*/

export const MainFooterDiv = styled.div`
  background-color: #000;
  color: white;
  padding: 3%;
  text-align: center;
`;

export const SimpleContactStyle = styled.span`
  padding: 0 10px 0;
`;

/*
  MODAL
*/

// MODALjs OUTTER DIV
export const ModalDiv = styled.div`
  display: inline;
`;
// MODAL-TYPEjs OUTTER DIV WITHIN HOME CONT.
export const ModalTypeDiv = styled.div`
  z-index: 1;
  position: absolute;
  top: 245px;
  left: 85px;
`;

/*
  SERVICE
*/

// SERVICEjs OUTTER DIV
export const OutterServiceTypeDiv = styled.div`
  position: relative;
`;

// SERVICEjs H1 EL
export const ServiceHeader = styled.h1`
  margin: 8% 0;
  text-align: center;
  font-size: 4em;
  font-weight: bold;
  font-style: italic;
`;

//SERVICEjs div's around the icons and description.
export const TypeServiceDiv = styled.div`
  text-align: center;
  margin: 0 0 20px;

  span {
    display: block;
    line-height: 50px;
    font-size: 1.5em;
    font-style: italic;
    font-weight: bold;
  }
`;

/*
  CAROUSEL
*/

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


/*
  CARD
*/

// POSTCARDjs ROOT CARD JSX FOR MOBILE
export const MainCardDiv = styled.div`
  width: 95%;
  margin: 0 auto;
`;
// DIFFERENCE HERE IS THE MAIN CARD IS PART
// OF THE CARD COMPONENT AND MAINCARDDIV IS JUST
// THE DIV THAT SURROUNDS IT
export const MainCard = styled(Card)`
  margin: 0 0 20px;
`;

/*
  MULTIPLE USE COMPONENTS
*/

export const Button = styled.button`
  width: ${props => props.full ? "95%" : "45%"};
  display: ${props => props.full ? "block" : "inline"};
  padding: 0.25em 1em;
  margin: 0 0 0.8em 0;
  font-size: 1.5em;
  border-radius: 6px;
  background-color: #006dcc;
  color: white;
`;

export const BlackFade =styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: .4;
  z-index-1;
`;

// FULLSCREEN BACKGROUND IMAGE(S)
export const FScreenImgDiv = styled.div`
    overflow: hidden;
    position: relative;

    img {
      width: 200%;
    }
`;

// FOR MAIN DIV ON SINGLE IMG COMPONENT
export const OutterSingleImageDiv = styled.div`
  padding: 0;
`;
