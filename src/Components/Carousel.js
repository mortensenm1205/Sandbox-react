import React, { Component } from 'react';
import { CarouselDiv } from "../Styled/index";
import { connect } from 'react-redux';
import { imagesRetrival } from '../Actions/imgSelection';

class CarouselComponent extends Component {


    componentDidMount() {
      this.props.images("http://reacttranslationwork.local/wp-json/wp/v2/media");
      // this.props.images("http://reacttranslation.local/wp-json/wp/v2/media");
    }

    render() {
      var settings = {
        dots: false,
        arrows: false,
        autoplay: true
      };

      var { imgType } = this.props;
      return (
        <div>
          <CarouselDiv {...settings}>
              {this.props.imageData.map(function(image) {
                if (image.alt_text === imgType) {
                  return <div key={image.id} >
                    <img
                    src={image.source_url}
                    alt={image.alt_text} />
                  </div>
                }
              })}
          </CarouselDiv>
        </div>
      );
    }
}

const mapStateToProps = state => {
  return {
    imageData: state.images
  }
};

const mapDispatchToProps = dispatch => {
  return {
    images: (url) => dispatch(imagesRetrival(url))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CarouselComponent);
