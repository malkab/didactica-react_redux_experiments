import { Component, ReactNode } from "react";

import "./styles.css";

import PropTypes from "prop-types";

/**

  A test component.

*/

export interface IRCPSecret {

  // Mask
  mask: string;

  // Secret
  secret: string;

}

export class RCSecret extends Component<IRCPSecret> {

  static propTypes: any = {
    mask: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired
  };

  public state: { show: string } = { show: "mask" };

  /**

    Constructor.

  */
  constructor(props: IRCPSecret) {

    super(props);

    this.state = { show: props.mask };

  }

  private onButtonClick = () => {

    this.setState(() => ({ show: this.props.secret }))

  }

  /**

    Render the component.

  */
  public render(): ReactNode {

    return (
      <div>
        <h1>{this.state.show}</h1>
        <button onClick={this.onButtonClick}>Reveal the secret!</button>
      </div>
    )

  }

}
