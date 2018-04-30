export function applicationFormData(state = {}, action) {
  switch(action.type) {
    case "APPLICATION_DATA_SUCCESS":
      return {
        ...state,
        ...action.data
      }
    default:
      return state;
  }
}
