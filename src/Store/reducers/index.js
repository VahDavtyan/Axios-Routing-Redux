import posts from './reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  posts
});

export default rootReducer;
