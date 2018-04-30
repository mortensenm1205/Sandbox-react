export function selectedFile(state = null, action) {
  switch(action.type) {
    case 'FILE_SELECTED_SUCCESS':
      return action.file;
    default:
      return state;
  }
}

export function quoteFormData(state = [], action) {
  switch(action.type) {
    case 'QUOTE_FORM_DATA_SUCCESS':
      return action.data
    default:
      return state;
  }
}
