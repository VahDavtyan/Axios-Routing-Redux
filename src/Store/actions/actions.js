import axios from 'axios';
export const AXIOS_POSTS = 'AXIOS_POSTS';

export const getAllUsers = () => {
  return dispatch => {
    return axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      dispatch({ type: AXIOS_POSTS, payload: res.data });
    });
  };
};
