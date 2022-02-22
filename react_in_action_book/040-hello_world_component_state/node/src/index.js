import React, { Component } from 'react';

import { render } from 'react-dom';

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
  extending React.Component.

  Component Props are inmutable.

  Component State is mutable, but must be mutated the React way.

*/
class CreateComment extends Component {

  // Props: inmutable
  constructor(props) {
    super(props);

    // State: mutable
    this.state = {
      content: "",
      user: ""
    }

    // Event bindings
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Method for events
  handleUserChange(event) {
    const val = event.target.value;

    this.setState(() => ({
      user: val
    }));

    // This proves that changes to state is made when React seems fit to
    // optimize global changes. Drop the timeout to see changes are not
    // inmediate
    setTimeout(() => console.log("D: handleUserChange", this.state), 100);
  }

  handleTextChange(event) {
    const val = event.target.value;

    this.setState(() => ({
      content: val
    }));

    setTimeout(() => console.log("D: handleTextChange", this.state), 100);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState(() => ({
      user: '',
      content: ''
    }));

    setTimeout(() => console.log("D: handleSubmit", this.state), 100);
  }

  render() {
    return React.createElement('form', {
      className: 'createComment',
      onSubmit: this.handleSubmit
    },
      React.createElement('input', {
        type: 'text', placeholder: 'Your name',
        value: this.state.user, onChange: this.handleUserChange
      }),
        React.createElement('input', {
          type: 'text', placeholder: 'Thoughts?',
          value: this.state.content, onChange: this.handleTextChange
        }),
        React.createElement('input', { type: 'submit', value: 'Post' }));
  }

}

// CreateComment.propTypes = {
//   content: React.PropTypes.string,
//   user: React.PropTypes.string
// };

class Post extends Component {

  render() {

    return React.createElement("div", { className: "post" },
      React.createElement("h2", { className: "postAuthor", id: this.props.id },
        this.props.user,
        React.createElement("span", { className: "postBody" },
          this.props.content ), this.props.children));

  }

}

Post.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

class Comment extends Component {

  render() {

    return React.createElement("div", { className: "comment" },
      React.createElement("h2", { className: "commentAuthor red" }, this.props.user,
        React.createElement("span", { className: "commentContent" }, this.props.content
      )))

  }

}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};

const App = React.createElement(Post,
    { id: 1, content: " Said the post!", user: "Malkab" },
  React.createElement(Comment,
    { id: 2, user: "bob", content: " commented: great" }),
  React.createElement(CreateComment)
);

render(App, node);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
