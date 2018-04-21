import React from "react";
import Service from '../../Components/Service';

const Services = props => {
  return (
    <div>
      <Service
        typeServ='Translation'
        typeImg={process.env.PUBLIC_URL + '/images/placeholder_red.png'}
        areaServ={process.env.PUBLIC_URL + '/images/placeholder_gray.png'}
      />
      <Service
        typeServ='Interpretation'
        typeImg={process.env.PUBLIC_URL + '/images/placeholder_red.png'}
        areaServ={process.env.PUBLIC_URL + '/images/placeholder_gray.png'}
      />
    </div>
  );
};

export default Services;
