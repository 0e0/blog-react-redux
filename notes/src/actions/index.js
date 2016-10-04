// to make ajax request from  the browser
import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POSTS = 'CREATE_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';


const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=1234asdf';

export function fetchPosts() {
  // to do a post request
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
      // I pass this to my reducers
      type: FETCH_POSTS,
      payload: request
  };
}

// this receives all of the content of the new post through props
// takes properties from the form and post them in the endpoint I provided
export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request
  };
}

// the parameter id enables me to get the id from a particular set of data
export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)

  return {
    type: FETCH_POST,
    payload: request
  };

}

export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)

  // don't need to connect to reducers, always complete my action creators
  return {
    type: FETCH_POST,
    payload: request
  };
}
