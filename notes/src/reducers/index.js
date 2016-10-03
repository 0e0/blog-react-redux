import { combineReducers } from 'redux';
// connect to reducer_post.js
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducer // name is descriptive of what state it contains
});

export default rootReducer;
