// to make ajax request from  the browser
import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';


const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=1234asdf';

export function fetchPosts() {
  // to do a post request
  const request = axios.get(`${ROOT_URL}/post${API_KEY}`);

  return {
      // I pass this to my reducers
      type: FETCH_POSTS,
      payload: request
  }
}
