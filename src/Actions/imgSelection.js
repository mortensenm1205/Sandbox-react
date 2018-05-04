import axios from 'axios';

export function imagesSelection(images) {
  return {
    type: "SINGLE_IMAGE_SELECTION",
    images
  };
};

export function imagesRetrival(url) {
  return (dispatch) => {
    axios.get(url)
      .then(function(image) {
        dispatch(imagesSelection(image.data))
      });
  };
};
