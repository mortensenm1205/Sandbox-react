import axios from 'axios';

export function fileSelectedSuccess(file) {
  return {
    type: 'FILE_SELECTED_SUCCESS',
    file
  }
}

export function fileUploader(url, file) {
  return (dispatch) => {
    // axios.post(url, file)
    //   .then(function(res) {
    //     console.log(res);
    //   })
    console.log(url, file);
  }
}
