export function applicationDataSuccess(appName, appInfo) {
  return {
    type: 'APPLICATION_DATA_SUCCESS',
    data: {
      [appName]: appInfo
    }
  }
}
