import { Component } from 'react';

import '../../index.css';

import "./styles.css";

import PropTypes from "prop-types";

import { CUser, IPropsUser } from "../cuser/cuser";


export interface IPropsComment {
  id: string;
  user: IPropsUser;
  content: string;
}

export class CComment extends Component<IPropsComment> {

  static propTypes: any = {
    id: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired
  };

  /**

    Constructor.

  */
  constructor(props: IPropsComment) {
    super(props);
  }

  /**

    Render the component.

  */
  public render() {

    return (
      <span>
        <CUser id={this.props.user.id} name={this.props.user.name} /> said: {this.props.content}
      </span>
    );

  }

}
