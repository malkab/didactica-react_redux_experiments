import React, { Component } from 'react';

import * as ReactDOM from 'react-dom';

import './index.css';

import reportWebVitals from './reportWebVitals';

/**

  Components.

*/
import { CPost, IPropsPost } from "./components/cpost/cpost";

import { CComment } from "./components/ccomment/ccomment";

import { CUser } from "./components/cuser/cuser";

import { CCreateComment } from "./components/ccreatecomment/ccreatecomment";

import { IPropsComment } from './components/ccomment/ccomment';

/**

  This is a runtime validator for the props of a Component. While using
  TypeScript interfaces are great for development and compile time debugging,
  PropTypes enable runtime debugging and is very useful.

*/
import PropTypes from "prop-types";

/**

  Fake data. This is supposed to come from the API.

*/
const data: IPropsPost = {
  id: "0",
  user: { id: "0", name: "Mark Thomas" },
  content: "The post content",
  comments: [
    { id: "0", user: { id: "1", name: "David" }, content: "Comment 0" },
    { id: "1", user: { id: "2", name: "Ferdinand" }, content: "Comment 1" }
  ]
}

/**

  The HTML element at the HTML template in public (line 31) where the element
  will be injected.

*/
const node = document.getElementById("root");

/**

  This is perfectly correct at compilation time because the interface defines
  content as optional, but the propTypes will complaint.

*/
// const App = React.createElement(CComment, data.comments[0]);

// const App = React.createElement(CCreateComment,
//   { onCommentSubmit: (a: IPropsComment) => console.log("D: 8888", a) });

const App = React.createElement(CPost, data);

// const App = React.createElement(CUser, data.user);

ReactDOM.render(App, node);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
