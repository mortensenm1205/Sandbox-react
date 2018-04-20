import React from "react";
import CarouselComponent from "../../Components/Carousel";

const divDimensions = {
  height: '450px',
  width: '100%',
  backgroundColor: 'dodgerBlue',
  border: '1.5px solid',
  margin: '2.5% 0'
}

const Home = props => {
  return (
    <div>
      <h1>{props.page}</h1>
      <CarouselComponent />
      <div style={divDimensions}></div>
    </div>
  );
};

export default Home;
