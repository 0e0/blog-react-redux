import { combineReducers } from 'redux';
// connect to reducer_post.js
import PostsReducer from './reducer_posts';
// connect to redux-form, reducer as formReducer just grabs a component from
// redux-form called reducer and creates a new variable/name for that reducer to
// prevent confusion. It is now called formReducer
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer, // name is descriptive of what state it contains
  // make sure to use the key form
  form: formReducer
});

export default rootReducer;
