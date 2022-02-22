import { Component } from 'react';

import '../../index.css';

import "./styles.css";

import PropTypes from "prop-types";


/**

  Interface that defines an user.

*/
export interface IPropsUser {

  // ID
  id: string;

  // Name
  name: string;

}

/**

  A component can receive an Object as props, but only public members will be
  taken into account. The component won't recognize the Object prop as a full
  object, so it doesn't have access to methods, for example. It is as if an
  interface with the public members only has been passed as props.

*/
export class CUser extends Component<IPropsUser> {

  static propTypes: any = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  };

  /**

    Constructor.

  */
  constructor(user: IPropsUser) {
    super(user);
  }

  /**

    Render the component.

  */
  public render() {

    return (
      <span id={this.props.id} className="userName">{this.props.name} ({this.props.id})</span>
    )

  }

}
