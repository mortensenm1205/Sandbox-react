import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

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
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
      >
        <div>
          <img
            alt="filler-text"
            src="http://www.poshreklam.com/wp-content/uploads/2014/06/placeholder.png"
          />
        </div>
        <div>
          <img
            alt="filler-text"
            src="http://gulfinfotech.com/wp-content/uploads/revslider/rev_slider_example/placeholder-blue.png"
          />
        </div>
        <div>
          <img
            alt="filler-text"
            src="http://www.apexcartage.com/wp-content/uploads/revslider/rev_slider_example/placeholder-red.png"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
