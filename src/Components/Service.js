import React from "react";
import Modal from "./Modal";
import CarouselComponent from "./Carousel";
import { ModalTypeDiv } from "../Styled/index";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faBook from "@fortawesome/fontawesome-free-solid/faBook";

const Service = (props) => {
  return (
    <div>
      <h1>{props.typeServ}</h1>
      <ModalTypeDiv>
        <Modal type="Quote"/>
        <Modal type="Apply"/>
      </ModalTypeDiv>
      <CarouselComponent imgType={props.carouselImgs} />
      <div>
        <FontAwesomeIcon icon={faBook} size="3x" />
      </div>
      <div>
      </div>
    </div>
  )
};

export default Service;
