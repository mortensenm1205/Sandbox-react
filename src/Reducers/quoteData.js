export function quoteFormData(state = {}, action) {
  switch(action.type) {
    case 'QUOTE_FORM_DATA_SUCCESS':
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
}
