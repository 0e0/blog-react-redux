// MAKE SURE TO REALLY THINK ABOUT WHAT MY STATE NEEDS TO LOOK LIKE
// BEFORE I CONTINUE WITH BUILDING MY APPLICATION, OTHERWISE
// IT WILL CAUSE ME A LOT OF PROBLEMS LATER ON

// this was created inside my actions/index.js
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index';

// this will contain the state I pass to it later on
// all will contain the list of blogpost, post contain the individual post
const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POST:
      // saves all the existing post inside (post: null);
      // it replaces the content of post: null with the one I pass it
      return {...state, post: action.payload.data};
    case FETCH_POSTS:
      // ...state means to take the current state and return that along
      // all, which will now contain my ajax request data
      return { ...state, all: action.payload.data };

    // by default the state is an object
    default:
      return state;
  }
}
