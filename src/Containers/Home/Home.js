import React from "react";
import Media from "react-media";
import CarouselComponent from "../../Components/Carousel";
import SingleImage from '../../Components/SingleImg';
import Modal from "../../Components/Modal";
import PostCard from "../../Components/PostCard";
import { ModalTypeDiv, DivAroundImages } from '../../Styled/index';

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
      <ModalTypeDiv>
        <Modal type="Quote"/>
        <Modal type="Apply"/>
      </ModalTypeDiv>
      <Media query="(min-width: 800px)">
        {matches =>
          matches ? (
            <CarouselComponent imgType="home_img"/>
          ) : (
            <DivAroundImages>
              <SingleImage imgType="mobile_home_img" />
            </DivAroundImages>
          )
        }
      </Media>
      <div style={divDimensions}></div>
      <PostCard />
    </div>
  );
};

export default Home;
