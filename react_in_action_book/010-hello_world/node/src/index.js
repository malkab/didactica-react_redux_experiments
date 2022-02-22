import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

/**

  The HTML element at the HTML template in public (line 31) where the element
  will be injected.

*/
const node = document.getElementById("root");

/**

  These are a set of nested React Elements, the building blocks of React.
  Styles for the Elements created in this page are at index.css.

*/
const root = React.createElement("div", {},
  React.createElement("h1", { id: "red" }, "Hello, world!",
    React.createElement("a", { href: "http://www.edgeent.com" },
      React.createElement("h1", {}, "React in Action"),
      React.createElement("em", {}, "the thing"))));

ReactDOM.render(root, node);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
