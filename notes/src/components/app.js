import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
      React simple starter
      // to render the nested paths do this, this line of code is necesary
      // in order for react to know where to place the nested routes' components
      {this.props.children}
      </div>
    );
  }
}
