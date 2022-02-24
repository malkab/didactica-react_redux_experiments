import { SyntheticEvent, Component, ReactNode } from "react";

import PropTypes from "prop-types";

/**

  Child statefull component.

*/

// Interface defining the props
export interface IRCPChildStatefull {

  // Name
  name: string;

  // Age
  age: number;

  // Future
  future: number;

  // onSubmit function to get data upwards
  onSubmit: (state: IRCSChildStatefull) => void

}

// Interface defining the state
export interface IRCSChildStatefull {

  // Name
  name: string;

  // Age
  age: number;

  // Future
  future: number;

}

export class RCChildStatefull extends Component<IRCPChildStatefull> {

  /**

    Prop checks.

  */
  static propTypes: any = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    future: PropTypes.number.isRequired
  };

  /**

    Default props.

  */
  static defaultProps: IRCPChildStatefull = {
    name: "",
    age: 0,
    future: 0,
    onSubmit: (x: IRCSChildStatefull) => {}
  };

  /**

    State.

  */
  public state: IRCSChildStatefull = {
    name: "",
    age: 0,
    future: 0
  }

  /**

    Constructor.

  */
  constructor(props: IRCPChildStatefull) {

    super(props);

    // state initialization (based on props most of the time)
    this.state = {
      name: this.props.name,
      age: this.props.age,
      future: this.props.future
    };

  }

  /**

    Change.

  */
  private _onSubmit: (event: SyntheticEvent) => void =
    (event: SyntheticEvent) => {

      event.preventDefault();

      this.props.onSubmit(this.state);

    }

  /**

    Name change.

  */
  private _onNameChange: (event: SyntheticEvent) => void =
    (event: SyntheticEvent) => {

      const target: HTMLInputElement = event.target as HTMLInputElement;

      event.preventDefault();

      this.setState(() => ({
        name: target.value
      }))

    }

  /**

    Age change.

  */
  private _onAgeChange: (event: SyntheticEvent) => void =
    (event: SyntheticEvent) => {

      const target: HTMLInputElement = event.target as HTMLInputElement;

      event.preventDefault();

      this.setState(() => ({
        age: target.value
      }))

    }

  /**

    Age change.

  */
  private _onFutureChange: (event: SyntheticEvent) => void =
    (event: SyntheticEvent) => {

      const target: HTMLInputElement = event.target as HTMLInputElement;

      event.preventDefault();

      this.setState(() => ({
        future: target.value
      }))

    }

  /**

    Render the component.

  */
  public render(): ReactNode {

    return (
      <div>
        <form onSubmit={this._onSubmit}>

          <p className="class">However, all this can be changed here:</p>

          <p>Name: <input type="text" placeholder={this.state.name}
            onChange={this._onNameChange} /></p>

          <p>Age: <input type="number"
            placeholder={this.state.age as any as string}
            onChange={this._onAgeChange} /></p>

          <p>Future: <input type="number"
            placeholder={this.state.future as any as string}
            onChange={this._onFutureChange} /></p>

          <p><input type="submit" value="Change" /></p>

        </form>

      </div>
    )

  }

}
