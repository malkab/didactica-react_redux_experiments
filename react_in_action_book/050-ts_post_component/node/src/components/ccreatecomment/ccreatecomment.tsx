import React, { Component } from 'react';

import { CComment, IPropsComment } from '../ccomment/ccomment';

/**

  This is a runtime validator for the props of a Component. While using
  TypeScript interfaces are great for development and compile time debugging,
  PropTypes enable runtime debugging and is very useful.

*/
import PropTypes from "prop-types";

/**

  Create comment interface.

*/
export interface IPropsCreateComment {
  onCommentSubmit: (a: IPropsComment) => any;
}


/**

  TypeScript allows to define props as interfaces for Component classes.
  This is going to be passed to the definition of the Component class as the
  generic. Note that content is optional.

  Defining props structure as interfaces allows for easy checking while coding
  and at compilation time. However, won't warn at runtime.

  Props can be objects defined by classes.

  This is a React Component, the upper level of Element. It is a class
  extending React.Component.

*/
export class CCreateComment extends Component<IPropsCreateComment> {

  /**

    PropTypes adds runtime checks of the props passed to the component. It is
    to some extent redundant with the interface governing props.

  */
  static propTypes: any = {
    onCommentSubmit: PropTypes.func.isRequired
  };

  /**

    Internal Comment object to track status.

  */
  private _comment: IPropsComment = {
      id: "0",
      user: { id: "0", name: "" },
      content: ""
    };

  /**

    The component's state.

  */
  public state: { comment: IPropsComment };

  // Method for events
  private _handleUserChange(event: React.SyntheticEvent) {

    const target: HTMLInputElement = event.target as HTMLInputElement;

    this._comment.user.name = target.value;

    this.setState(() => ({ comment: this._comment }));

    // This proves that changes to state is made when React seems fit to
    // optimize global changes. Drop the timeout to see changes are not
    // inmediate
    setTimeout(() => console.log("D: handleUserChange", this.state), 100);

  }

  private _handleTextChange(event: React.SyntheticEvent) {

    const target: HTMLInputElement = event.target as HTMLInputElement;

    this._comment.content = target.value;

    this.setState(() => ({ comment: this._comment }));

    setTimeout(() => console.log("D: handleTextChange", this.state), 100);

  }

  private _handleSubmit(event: React.SyntheticEvent) {

    // const target: HTMLFormElement = event.target as HTMLFormElement;

    console.log("D: handleSubmit before reset", this.state);

    event.preventDefault();

    this.props.onCommentSubmit(this._comment);

    this._resetComment();

    this.setState(() => ({ comment: this._comment }));

    setTimeout(() => console.log("D: handleSubmit", this.state), 100);

  }

  /**

    Resets the comment used as state.

  */
  private _resetComment(): void {

    this._comment = {
      id: "0",
      user: { id: "0", name: "" },
      content: ""
    }

  }

  /**

    Constructor.

  */
  constructor(props: IPropsCreateComment) {
    super(props);

    this.state = {
      comment: this._comment
    }

    // Event bindings, must appear at the constructor
    this._handleUserChange = this._handleUserChange.bind(this);
    this._handleTextChange = this._handleTextChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);

  }

  /**

    Render the component.

  */
  public render() {

    return (

      <form onSubmit={this._handleSubmit}>

        <input type="text" placeholder="Your name"
          value={this.state.comment.user.name} onChange={this._handleUserChange} />

        <input type="text" placeholder="Thoughts?"
          value={this.state.comment.content} onChange={this._handleTextChange} />

        <input type="submit" value="Post" />

      </form>

    )

  }

}
