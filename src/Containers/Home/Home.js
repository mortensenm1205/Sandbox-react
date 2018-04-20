import React from "react";
import CarouselComponent from "../../Components/Carousel";

const styleH1 = {
  textAlign: "center",
  color: "red",
  position: "absolute",
  zIndex: 1,
  top: "45%",
  left: "45%"
};

const styleMainDiv = {
  opacity: 0.8
};

const Home = props => {
  return (
    <div style={styleMainDiv}>
      <h1 style={styleH1}>{props.page}</h1>
      <CarouselComponent />
    </div>
  );
};

export default Home;
