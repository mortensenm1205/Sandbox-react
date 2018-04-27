import React from 'react';
import Modal from "./Modal";

const Service = (props) => {
  return (
    <div>
      <h1>{props.typeServ}</h1>
      <Modal type="Quote"/>
      <Modal type="Apply"/>
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
