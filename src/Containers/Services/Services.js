import React from "react";
import Service from '../../Components/Service';
import { Route } from 'react-router-dom';

const Services = props => {
  return (
    <div>
      <Route
        exact
        path="/translation"
        render={() => {
          return <Service
            typeServ='Translation'
            carouselImgs="translation_service"
          />;
        }}
      />
    </div>
  );
};

export default Services;
