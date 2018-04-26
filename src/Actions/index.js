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
      .then(function(posts) {
        dispatch(postsFetchDataSuccess(posts.data))
      });
  }
}
