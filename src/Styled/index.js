import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { Card, CardMedia } from 'material-ui/Card';

/*
  BASE / ROOT STYLING
*/
export const Root = styled.div`
  max-width: 1250px;
  margin: 0 auto;
`;

/*
  NAVBAR
*/
export const Header = styled.header``;

export const OutterUL = styled.ul`
  padding: 0;
  text-align: center;

  @media (min-width:750px) {
    display: inline-block;
    width: 50%;
  }

  @media (min-width:1100px) {
    width: 65%;
    text-align: right;
  }
`;

export const InnerUL = styled.ul`
  padding: 0;
`;

// FOR DIV AROUND LOGO IMAGE IN NAVBARjs
export const ImageDivAroundLogo = styled.div`
  text-align: center;

  img {
    width: 98%;
    height: 100%;
  }

  @media (min-width:750px) {
    text-align: left;
    display: inline-block;
    width: 35%;
    padding: 2% 0 0;

    img {
      width: 65%;
    }

  }

  @media (min-width:1100px) {
    img {
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

  @media (min-width:750px) {
    span {
      display: block;
    }
  }
`;


// FOR THE MOBILE MENU, IT BELONGS TO INPUT
// HIDING IT AFTER 800PX
export const Label = styled.label`
  margin: 5% 0 0;
  font-size: 1.8em;
  cursor: pointer;

  @media (min-width:750px) {
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

    @media (min-width:750px) {
      display: inline-block;
      margin: 3% 5% 0;
      border-bottom: none;
    }


    @media (min-width:1100px) {
      font-size: 1.6em;
      margin: 3% 2.5% 0;
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

//THE CLIENT IMAGES NEEDED TO BE CNETERED FOR
//TABLET LAYOUT, SO I WRAPPED IT IN A DIV
export const DivAroundClientsImages = styled.div`
  text-align: center;
`;

// ALL THIS IS DOING IS SETTING UP THE
// OUR CLIENTS SECTION WITHIN HOMEjs
export const OurClientsImageDiv = styled.div`
  text-align: center;

  img {
    width: 55%;
    margin: 20px 0;
  }

  @media (min-width:750px) {
    width: 30%;
    display: inline-block;
  }

  @media (min-width:1100px) {
    width: 20%;

    img {
      width: 60%;
    }
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

export const HomePostOnlyDiv = styled.div`
  text-align: center;
`;


/*
  SERVICE
*/

// SERVICEjs OUTTER DIV
export const OutterServiceDiv = styled.div`
  position: relative;
`;


export const OutterServiceTypeDiv = styled.div`
  text-align: center;
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

  @media (min-width:750px) {
    display: inline-block;
    margin: 3%;
  }
`;

/*
  BLOG
*/

export const MainBlogDiv = styled.div`
  padding: 0 0 10% 0;

`;


/*
  FOOTER
*/

export const MainFooterDiv = styled.div`
  background-color: #000;
  color: white;
  padding: 3%;
  text-align: center;

  @media (min-width:1100px) {
    text-align: left;
  }
`;

export const ContactDiv = styled.div`

  & > div {
    vertical-align: text-top;
    display: inline-block;
    width: 20%;
    margin: 0 5%;
  }
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
  top: 10%;
  left: 17%;

  @media (min-width:750px) {
    top: 18%;
    left 33%;
  }

  @media (min-width:1100px) {
    top: 22%
    left: 33%;
    width: 35%;
  }
`;

// LABEL MODAL STYLING FOR APPLY AND QUOTE
export const Labels = styled.label`
  display: block;
  margin: 0 0 2% 0;

  & input {
    margin: 0 0 0 2%;
    width: 70%;
  }

  & ${Button} {
    display: block;
  }

`;


/*
  CAROUSEL
*/

// CAROUSELjs SLIDER COMPONENT
export const CarouselDiv = styled(Slider)`
  margin: 2% 0;
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

  @media (min-width:750px) {
    display: inline-block;
    width: 45%;
    vertical-align: text-top
    margin: 0 2% 0 0;
  }

  @media (min-width:1100px) {
    width: 25%;
    margin: 0 4% 0 0;
  }
`;

export const CardImgMedia = styled(CardMedia)`
  height: 165px;
  overflow: hidden;
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


  @media (min-width:1100px) {
    padding: ${props => props.full ? "3% 0" : "0"}
  }

`;

export const BlackFade =styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: .4;
  z-index-1;

  @media (min-width:750px) {
    top: 3px;
  }
`;

// FULLSCREEN BACKGROUND IMAGE(S)
export const FScreenImgDiv = styled.div`
    position: relative;

    img {
      width: 200%;
      display: block;
      overflow: hidden;

      @media (min-width:750px) {
        width: 100%;
      }
    }

`;

// FOR MAIN DIV ON SINGLE IMG COMPONENT
export const OutterSingleImageDiv = styled.div`
  padding: 0;
`;

// SERVICEjs H1 EL, THIS IS ALSO USED IN BLOGjs
export const ServiceHeader = styled.h1`
  margin: 8% 0;
  text-align: center;
  font-size: 4em;
  font-weight: bold;
  font-style: italic;
`;
