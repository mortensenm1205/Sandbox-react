import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD6Nq5_rAhSApqV-UWd7OM-PFgdr-HxnsY",
    authDomain: "wp-api-react-aa047.firebaseapp.com",
    databaseURL: "https://wp-api-react-aa047.firebaseio.com",
    projectId: "wp-api-react-aa047",
    storageBucket: "wp-api-react-aa047.appspot.com"
};

firebase.initializeApp(config);
export default firebase;
