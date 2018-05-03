import React, { Component } from 'react';
import Slider from "react-slick";
import { CarouselDiv, OutterCarouselDiv, CarouselImg } from "../Styled/index";
import axios from "axios";

class CarouselComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {
        images: []
      };
    }

    // .get("http://reacttranslation.local/wp-json/wp/v2/media")
    componentDidMount() {
      axios
        .get("http://reacttranslationwork.local/wp-json/wp/v2/media")
        .then(imageData => this.setState({ images: imageData.data }));
    }

    render() {
      var settings = {
        dots: false,
        arrows: false,
        autoplay: true
      };

      var { imgType } = this.props;
      return (
        <OutterCarouselDiv>
          <CarouselDiv {...settings}>
              {this.state.images.map(function(image) {
                if (image.alt_text === imgType) {
                  return <div key={image.id} >
                    <CarouselImg
                    src={image.source_url}
                    alt={image.alt_text} />
                  </div>
                }
              })}
          </CarouselDiv>
        </OutterCarouselDiv>
      );
    }
}

export default CarouselComponent;
