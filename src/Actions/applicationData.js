import firebase from '../firebase';

export function applicationDataSuccess(appName, appInfo) {
  return {
    type: 'APPLICATION_DATA_SUCCESS',
    data: {
      [appName]: appInfo
    }
  }
}

export function applicationFormDataUpload(data) {
  const appRef = firebase.database().ref('applications');
  return dispatch => appRef.push(data)
}
