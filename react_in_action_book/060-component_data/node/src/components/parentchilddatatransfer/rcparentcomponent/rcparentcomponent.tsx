import { Component, ReactNode } from "react";

import PropTypes from "prop-types";

import { RCChildStateless } from "../rcchildstateless/rcchildstateless";

import { RCChildStatefull, IRCSChildStatefull }
  from "../rcchildstatefull/rcchildstatefull";

/**

  This is a test for a parent component to test data flow between components.

*/
export interface IRCPParentComponent {

  // A name
  name: string;

  // Age
  age: number;

}

interface IRCSParentComponent {

  // Name
  name: string;

  // Age
  age: number;

  // Future
  future: number;

}

export class RCParentComponent extends Component<IRCPParentComponent> {

  /**

    Prop checks.

  */
  static propTypes: any = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  };

  /**

    Default props.

  */
  static defaultProps: IRCPParentComponent = {
    name: "",
    age: 0
  };

  /**

    State.

  */
  public state: IRCSParentComponent = {
    name: "",
    age: 0,
    future: 0
  }

  /**

    Constructor.

  */
  constructor(props: IRCPParentComponent) {

    super(props);

    // state initialization (based on props most of the time)
    this.state = {
      name: this.props.name,
      age: this.props.age,
      future: 0
    };

  }

  /**

    Update data coming from RCChildStateFull. This is the callback that
    will allow child components to modify the state of this parent
    component, that will change props in childs in cascade.

  */
  private _dataChange: (state: IRCSChildStatefull) => void =
    (state: IRCSChildStatefull) => this.setState(() => ({
        name: state.name,
        age: +state.age,
        future: +state.future
      }));

  /**

    Render the component. The RCChildStatefull child will get the above
    method as a callback to change the state of this component.

  */
  public render(): ReactNode {

    return (
      <div>
        <span className="class">Person {this.state.name} is {this.state.age} years old.</span>
        <RCChildStateless name={this.state.name} age={this.state.age}
          future={this.state.future} />
        <RCChildStatefull name={this.state.name} age={this.state.age}
          future={this.state.future} onSubmit={this._dataChange}/>
      </div>
    )

  }

}
