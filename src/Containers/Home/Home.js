import React from "react";
import CarouselComponent from "../../Components/Carousel";
import Post_card from "../../Components/Post_card";

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
      <Post_card />
      <Post_card />
      <Post_card />
    </div>
  );
};

export default Home;
