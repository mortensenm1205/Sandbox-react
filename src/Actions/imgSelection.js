import axios from 'axios';

export function singleImageSelection(image) {
  return {
    type: "SINGLE_IMAGE_SELECTION",
    image
  };
};

export function singleImageRetrive(url) {
  return (dispatch) => {
    axios.get(url)
      .then(function(image) {
        dispatch(singleImageSelection(image.data))
      });
  };
};
