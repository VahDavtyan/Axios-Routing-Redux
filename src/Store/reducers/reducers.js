import { AXIOS_POSTS } from '../actions/actions';

let initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case AXIOS_POSTS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
