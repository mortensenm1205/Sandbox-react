import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1500}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
    >
      <div>
        <img
          alt="placeholder_gray"
          src={process.env.PUBLIC_URL + '/images/placeholder_gray.png'}
        />
      </div>
      <div>
        <img
          alt="placeholder_blue"
          src={process.env.PUBLIC_URL + '/images/placeholder_blue.png'}
        />
      </div>
      <div>
        <img
          alt="placeholder_red"
          src={process.env.PUBLIC_URL + '/images/placeholder_red.png'}
        />
      </div>
    </Carousel>
  )
}

export default CarouselComponent;
