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
            typeImg={process.env.PUBLIC_URL + '/images/placeholder_red.png'}
            areaServ={process.env.PUBLIC_URL + '/images/placeholder_gray.png'}
          />;
        }}
      />
      <Route
        exact
        path="/interpretation"
        render={() => {
          return <Service
            typeServ='Interpretation'
            typeImg={process.env.PUBLIC_URL + '/images/placeholder_red.png'}
            areaServ={process.env.PUBLIC_URL + '/images/placeholder_gray.png'}
          />;
        }}
      />
    </div>
  );
};

export default Services;
