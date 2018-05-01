import React, { Component } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
require(process.env.PUBLIC_URL + "css/slick.css");

class CarouselComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgData: []
    };
  }

  componentDidMount() {
    axios.get('http://reacttranslation.local/wp-json/wp/v2/media')
    .then(images => this.setState({ imgData: this.state.imgData.concat(images.data)}))
  }

  render() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
          <div>
            <img src={process.env.PUBLIC_URL + '/images/placeholder_blue.png'} />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + '/images/placeholder_blue.png'} />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + '/images/placeholder_blue.png'} />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + '/images/placeholder_blue.png'} />
          </div>
      </Slider>
    )
  }

}

export default CarouselComponent;
