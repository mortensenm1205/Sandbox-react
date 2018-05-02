import React, { Component } from 'react';
import Slider from "react-slick";
import axios from "axios";

class CarouselComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {
        images: []
      };
    }

    // .get("http://reacttranslationwork.local/wp-json/wp/v2/media")
    componentDidMount() {
      axios
        .get("http://reacttranslation.local/wp-json/wp/v2/media")
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
        <div className="container" style={{ width: "100%" }}>
          <Slider {...settings}>
              {this.state.images.map(function(image) {
                if (image.alt_text === imgType) {
                  return <div key={image.id} >
                    <img
                    style={{ width: "100%", display: "block", margin: "auto" }}
                    src={image.source_url}
                    alt={image.alt_text} />
                  </div>
                }
              })}
          </Slider>
        </div>
      );
    }
}

export default CarouselComponent;
