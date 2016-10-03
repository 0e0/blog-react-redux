// component to get access to react methods
import React, { Component } from 'react';
// connects react and redux, gives this container access to the state in redux
import { connect } from 'react-redux';
// ensures that all my actions flows through all my reducers
import { bindActionCreators } from 'redux';
// need to connect to my reducers
import { fetchPosts } from '../actions/index';
// to be able to navigate through other routes
import { Link } from 'react-router';

class PostsIndex extends Component {
  // allows me to fetch data automatically using react, react will call this
  // only once so it is a perfect place to do this

  // call the action creator here!
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          // This is how I create links/navigation in react
          <Link to="/posts/new" className="btn btn-primary">
          </Link>
        </div>
      List of blog posts.
      </div>

    );
  }
}

// this allows me to connect to my component that can dispatch actions
function mapDispatchToProps(dispatch) {
  // fetchPosts is from reducers/index.js
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostsIndex);

// from line 28 through 34, I can shorten this whole thing by doing the following:

export default connect(null, { fetchPosts })(PostsIndex);
