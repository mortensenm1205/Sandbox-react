import React from "react";
import { Button } from 'react-bootstrap';
import CarouselComponent from "../../Components/Carousel";
// import PostCard from "../../Components/Post_card";

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
      <Button bsStyle="primary" bsSize="large" >
        Quote
      </Button>
      <Button bsSize="large">
        Apply
      </Button>
      <CarouselComponent />
      <div style={divDimensions}></div>

    </div>
  );
};

export default Home;
