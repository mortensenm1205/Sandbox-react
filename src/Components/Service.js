import React from "react";
import Modal from "./Modal";
import Media from 'react-media';
import CarouselComponent from "./Carousel";
import { ModalTypeDiv, FScreenImgDiv, BlackFade, OutterServiceDiv, OutterServiceTypeDiv, ServiceHeader, ContextHeading, TypeServiceDiv } from "../Styled/index";
import SingleImage from "./SingleImg";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faBook from "@fortawesome/fontawesome-free-solid/faBook";
import faFileAlt from "@fortawesome/fontawesome-free-solid/faFileAlt";
import faCertificate from "@fortawesome/fontawesome-free-solid/faCertificate";

const Service = (props) => {
  return (
    <OutterServiceDiv>
      <ServiceHeader>{props.typeServ}</ServiceHeader>
      <ModalTypeDiv>
        <Modal type="Quote"/>
        <Modal type="Apply"/>
      </ModalTypeDiv>
      <Media query="(min-width: 750px)">
        {matches =>
          matches ? (
            <FScreenImgDiv>
              <CarouselComponent imgType={props.carouselImgs} />
              <BlackFade />
            </FScreenImgDiv>
          ): (
            <FScreenImgDiv>
              <SingleImage imgType="mobile_home_img" />
              <BlackFade />
            </FScreenImgDiv>
          )}
      </Media>
      <OutterServiceTypeDiv>
        <ContextHeading> Type of Translation we do: </ContextHeading>
        <TypeServiceDiv>
          <FontAwesomeIcon icon={faBook} size="4x" />
          <span>Manuals</span>
        </TypeServiceDiv>
        <TypeServiceDiv>
          <FontAwesomeIcon icon={faFileAlt} size="4x" />
          <span>Word Documents</span>
        </TypeServiceDiv>
        <TypeServiceDiv>
          <FontAwesomeIcon icon={faCertificate} size="4x" />
          <span>Birth Certificates</span>
        </TypeServiceDiv>
      </OutterServiceTypeDiv>
    </OutterServiceDiv>
  )
};

export default Service;
