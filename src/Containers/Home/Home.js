import React from "react";
import CarouselComponent from "../../Components/Carousel";
import Modal from "../../Components/Modal";
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
      <Modal type="Quote"/>
      <Modal type="Apply"/>
      <CarouselComponent imgType="home_img"/>
      <div style={divDimensions}></div>
    </div>
  );
};

export default Home;
