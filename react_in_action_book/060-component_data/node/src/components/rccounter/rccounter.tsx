import { Component, ReactNode } from "react";

import "./styles.scss";

import PropTypes from "prop-types";

/**

  A counter component.

*/
export interface IRCPCounter {

  // Modify by
  modifyBy: number;

  // Initial value
  initialValue: number;

  // Top threshold to change color
  thresholdTop: number;

  // Bottom threshold to change color
  thresholdBottom: number,

}

interface IRCSCounter {

  // Current value
  value: number;

  // Current color
  color: string;

}

export class RCCounter extends Component<IRCPCounter> {

  /**

    Prop checks.

  */
  static propTypes: any = {
    modifyBy: PropTypes.number.isRequired,
    initialValue: PropTypes.number.isRequired,
    thresholdTop: PropTypes.number.isRequired,
    thresholdBottom: PropTypes.number.isRequired
  };

  /**

    State.

  */
  public state: IRCSCounter = {
    value: 0,
    color: "normal"
  }

  /**

    Constructor.

  */
  constructor(props: IRCPCounter) {

    super(props);

    this.state = {
      value: props.initialValue,
      color: "normal"
    };

  }

  /**

    Increment.

  */
  public increment = () => {

    const newValue: number = this.state.value + this.props.modifyBy;
    let newColor: string = "normal";

    if (newValue > this.props.thresholdTop) newColor = "top";
    if (newValue < this.props.thresholdBottom) newColor = "bottom";

    this.setState(() => ({ value: newValue, color: newColor }));

  }

  /**

    Increment.

  */
  public decrement = () => {

    const newValue: number = this.state.value - this.props.modifyBy;
    let newColor: string = "normal";

    if (newValue > this.props.thresholdTop) newColor = "top";
    if (newValue < this.props.thresholdBottom) newColor = "bottom";

    this.setState(() => ({ value: newValue, color: newColor }));

  }

  /**

    Reset.

  */
  public reset = () => {

    this.setState(() => ({ value: this.props.initialValue, color: "normal" }))

  }

  /**

    Render the component.

  */
  public render(): ReactNode {

    return (
      <div>
        <span className={this.state.color}>{this.state.value}</span>
        <br />
        <button onClick={this.increment}>Increment by {this.props.modifyBy}</button>
        <button onClick={this.decrement}>Decrement by {this.props.modifyBy}</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )

  }

}
