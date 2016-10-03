import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//    router decides what component to render when the url is changed by the user
//    browserHistory it is an objec that tells react-router how to interpret
//    changes to the url, whenever http://www.blog.com/(this part changes) post/5
//    browserHistory tells react-router that it needs to update
//    * Other method includes hashHistory (http://www.blog.com/#posts5)
//    we would be using everything after the hash inside the url, to keep
//    track of what the user does
import { Router, browserHistory } from 'react-router';

import reducers from './reducers';
// to connect or map my routes with index.js
import routes from './routes';
// a middleware that transfile promise into usable data
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    // Router is used to link the url my user chose to the components they want
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
