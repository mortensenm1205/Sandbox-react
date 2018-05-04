export function singleImage(state = [], action) {
  switch (action.type) {
    case "SINGLE_IMAGE_SELECTION":
      return action.image;
    default:
      return state;
  }
}
