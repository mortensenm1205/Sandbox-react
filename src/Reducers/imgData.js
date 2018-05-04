export function images(state = [], action) {
  switch (action.type) {
    case "SINGLE_IMAGE_SELECTION":
      return action.images;
    default:
      return state;
  }
}
