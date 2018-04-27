export function selectedFile(state = null, action) {
  switch(action.type) {
    case 'FILE_SELECTED_SUCCESS':
      return action.file;
    default:
      return state;
  }
}
