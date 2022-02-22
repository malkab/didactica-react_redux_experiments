import React, { Component } from 'react';

import ReactDOM, { render } from 'react-dom';

import './index.css';

import reportWebVitals from './reportWebVitals';

/**

  This is a runtime validator for the props of a Component. While using
  TypeScript interfaces are great for development and compile time debugging,
  PropTypes enable runtime debugging and is very useful.

*/
import PropTypes from "prop-types";

/**

  The HTML element at the HTML template in public (line 31) where the element
  will be injected.

*/
const node = document.getElementById("root");

/**

  This is a React Component, the upper level of Element. It is a class
  extending React.Component

*/
class Post extends Component {

  render() {

    return React.createElement("div", { className: "post" },
      React.createElement("h2", { className: "postAuthor", id: this.props.id },
        this.props.user,
        React.createElement("span", { className: "postBody" }, this.props.content )));

  }

}

Post.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

const App = React.createElement(Post, { id: 1,
  content: " Said the post!", user: "Malkab"});

render(App, node);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
