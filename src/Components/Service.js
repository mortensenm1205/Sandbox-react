import React from 'react';

const Service = (props) => {
  return (
    <div>
      <h1>{props.typeServ}</h1>
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
