import React from 'react';
import Modal from "./Modal";
import CarouselComponent from "./Carousel";

const Service = (props) => {
  return (
    <div>
      <h1>{props.typeServ}</h1>
      <Modal type="Quote"/>
      <Modal type="Apply"/>
      <CarouselComponent imgType={props.carouselImgs} />
      <div>
        <img src={props.typeImg} alt={props.typeServ} />
      </div>
      <div>
        <img src={props.areaServ} alt={props.typeServ} />
      </div>
    </div>
  )
};

export default Service;
