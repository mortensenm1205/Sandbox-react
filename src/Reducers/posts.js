export function posts(state = [], action) {
  switch (action.type) {
    case 'POSTS_FETCH_DATA':
      return action.posts;
    default:
      return state;
  }
}
