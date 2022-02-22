import { Component } from 'react';

import '../../index.css';

import { CComment, IPropsComment } from "../ccomment/ccomment";

import { CCreateComment } from '../ccreatecomment/ccreatecomment';

import { IPropsUser } from "../cuser/cuser";

/**

  This is a runtime validator for the props of a Component. While using
  TypeScript interfaces are great for development and compile time debugging,
  PropTypes enable runtime debugging and is very useful.

*/
import PropTypes from "prop-types";

/**

  Defines a Post.

*/
export interface IPropsPost {

  // ID
  id: string;

  // User
  user: IPropsUser;

  // Content
  content: string;

  // Comments
  comments: IPropsComment[];

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
export class CPost extends Component<IPropsPost> {

  /**

    PropTypes adds runtime checks of the props passed to the component. It is
    to some extent redundant with the interface governing props.

  */
  static propTypes: any = {
    id: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired,
    comments: PropTypes.array
  };

  public state: { comments: IPropsComment[] }

  public a: number = 10;

  /**

    Constructor.

  */
  constructor(props: IPropsPost) {
    super(props);

    this.state = {
      comments: this.props.comments
    }

  }

  /**

    This is the callback to use in the CCreateComment component to upload the
    new comment. This has to be an arrow function so "this" points to this
    component.

  */
  public newComment: (a: IPropsComment) => void = (comment: IPropsComment): void => {

    const comments = this.state.comments;

    comment.id = `${Date.now()}`;

    const newComments: IPropsComment[] = comments.concat([comment]);

    this.setState({ comments: newComments });

  }

  /**

    Render the component.

  */
  public render() {

    return (
      <div className="post">

        <p>Author:</p>
        {/* <CUser id={this.props.user.id} name={this.props.user.name} /> */}

        <p>Content:</p>
        <p>{this.props.content}</p>

        <p>Add a comment:</p>
        <CCreateComment onCommentSubmit={this.newComment} />

        <p>Comments:</p>
        <ul>
          {this.state.comments.map((c: IPropsComment) =>
            <li key={c.id}>
              <CComment id={c.id} user={c.user} content={c.content} />
            </li>
          )}
        </ul>
      </div>
    )

  }

}
