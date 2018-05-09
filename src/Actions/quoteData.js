import firebase from '../firebase';

export function quoteFormDataSuccess(quoteName, quoteInfo) {
  return {
    type: 'QUOTE_FORM_DATA_SUCCESS',
    data: {
      [quoteName]: quoteInfo
    }
  }
}

export function quoteFormUploader(data) {
  const quoteRef = firebase.database().ref('quotes');
  return disptach => quoteRef.push(data);
}
