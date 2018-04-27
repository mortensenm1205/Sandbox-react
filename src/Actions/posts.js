import axios from 'axios';

export function postsFetchDataSuccess(posts) {
    return {
      type: 'POSTS_FETCH_DATA',
      posts
    };
}

export function postsFetchData(url) {
  return (dispatch) => {
     axios.get(url)
      // Had to write out 'function', arrow function didn't seem to work
      .then(function(posts) {
        dispatch(postsFetchDataSuccess(posts.data))
      });
  }
}
