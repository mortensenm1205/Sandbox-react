import axios from 'axios';

export function fileSelectedSuccess(file) {
  return {
    type: 'FILE_SELECTED_SUCCESS',
    file
  }
}

export function quoteFormDataSuccess(quoteName, quoteInfo) {
  return {
    type: 'QUOTE_FORM_DATA_SUCCESS',
    data: {
      [quoteName]: quoteInfo
    }
  }
}

export function quoteFormUploader(url, quoteData, sourceDoc) {
  return (dispatch) => {
    // axios.post(url, file)
    //   .then(function(res) {
    //     console.log(res);
    //   })
    console.log(url, quoteData, sourceDoc);
  }
}
