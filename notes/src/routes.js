import React from 'react';
// the Route object is used to define a match between the url and a component
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';

// export this in order for react-router inside src/index.js knows about it
export default (
//  I can nest my routes
// this matches the component App to the / path
  <Route path="/" component={App}>
// I can show App and PostIndex as my default components
    <IndexRoute component={PostsIndex} />
//  again I choose a path, then indicate what component will be rendered
//  react knows that I want to show both App and greeting, but it doesn't
//  know where to put Greeting, to make sure that Greeting is rendered applyMiddleware
//  {this.props.childred} inside the parent in this case App.
    <Route path="greet" component={Greeting} />
  </Route>
);
