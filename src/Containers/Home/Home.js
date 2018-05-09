import React, { Component } from "react";
import Media from "react-media";
import CarouselComponent from "../../Components/Carousel";
import SingleImage from '../../Components/SingleImg';
import Modal from "../../Components/Modal";
import PostCard from "../../Components/PostCard";
import { ModalTypeDiv, FScreenImgDiv, BlackFade, OutterHomeDiv, OurClientsImageDiv, ContextHeading, CustomContextHeading, SeperatedDiv, DivAroundClientsImages } from '../../Styled/index';
import { imagesRetrival } from "../../Actions/imgSelection";
import { connect } from 'react-redux';

class Home extends Component {

  componentDidMount() {
    this.props.images("http://reacttranslationwork.local/wp-json/wp/v2/media")
    // this.props.images("http://reacttranslation.local/wp-json/wp/v2/media")

  }

  render() {
    var { imgType } = this.props
    return (
      <OutterHomeDiv>
        <ModalTypeDiv>
          <Modal type="Quote"/>
        </ModalTypeDiv>
        <Media query="(min-width: 750px)">
          {matches =>
            matches ? (
              <FScreenImgDiv>
                <CarouselComponent imgType="home_img"/>
                <BlackFade />
              </FScreenImgDiv>
            ) : (
              <FScreenImgDiv>
                <SingleImage imgType="mobile_home_img" />
                <BlackFade />
              </FScreenImgDiv>
            )
          }
        </Media>
        <div>
          <ContextHeading> Our partners: </ContextHeading>
          <DivAroundClientsImages>
          {this.props.imageData.map(function(image) {
            if( image.alt_text === imgType ) {
              return (
                <OurClientsImageDiv key={image.id}>
                  <img
                  src={image.source_url}
                  alt={image.alt_text} />
                </OurClientsImageDiv>
              )
            }
          })}
          </DivAroundClientsImages>
        </div>
        <SeperatedDiv>
          <CustomContextHeading> Recent Blog Posts: </CustomContextHeading>
          <PostCard recent/>
        </SeperatedDiv>
      </OutterHomeDiv>
    );
  }
};

const mapStateToProps = state => {
  return {
    imageData: state.images
  }
}

const mapDispatchToProps = dispatch => {
  return {
    images: (url) => dispatch(imagesRetrival(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
