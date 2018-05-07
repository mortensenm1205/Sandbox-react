import React from "react";
import Media from "react-media";
import CarouselComponent from "../../Components/Carousel";
import SingleImage from '../../Components/SingleImg';
import Modal from "../../Components/Modal";
import PostCard from "../../Components/PostCard";
import { ModalTypeDiv, FScreenImgDiv, BlackFade, OutterHomeDiv } from '../../Styled/index';

const divDimensions = {
  height: '450px',
  width: '100%',
  backgroundColor: 'dodgerBlue',
  border: '1.5px solid',
  margin: '2.5% 0'
}

const Home = props => {
  return (
    <OutterHomeDiv>
      <ModalTypeDiv>
        <Modal type="Quote"/>
      </ModalTypeDiv>
      <Media query="(min-width: 800px)">
        {matches =>
          matches ? (
            <CarouselComponent imgType="home_img"/>
          ) : (
            <FScreenImgDiv>
              <SingleImage imgType="mobile_home_img" />
              <BlackFade />
            </FScreenImgDiv>
          )
        }
      </Media>
      <div style={divDimensions}></div>
      <PostCard />
    </OutterHomeDiv>
  );
};

export default Home;
