import React from "react";
import Modal from "./Modal";
import Media from 'react-media';
import CarouselComponent from "./Carousel";
import { ModalTypeDiv, FScreenImgDiv, BlackFade, OutterServiceTypeDiv, ServiceHeader } from "../Styled/index";
import SingleImage from "./SingleImg";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faBook from "@fortawesome/fontawesome-free-solid/faBook";

const Service = (props) => {
  return (
    <OutterServiceTypeDiv>
      <ServiceHeader>{props.typeServ}</ServiceHeader>
      <ModalTypeDiv>
        <Modal type="Quote"/>
        <Modal type="Apply"/>
      </ModalTypeDiv>
      <Media query="(min-width: 800px)">
        {matches =>
          matches ? (
            <CarouselComponent imgType={props.carouselImgs} />
          ): (
            <FScreenImgDiv>
              <SingleImage imgType="mobile_home_img" />
              <BlackFade />
            </FScreenImgDiv>
          )}
      </Media>
      <div>
        <FontAwesomeIcon icon={faBook} size="3x" />
      </div>
    </OutterServiceTypeDiv>
  )
};

export default Service;
