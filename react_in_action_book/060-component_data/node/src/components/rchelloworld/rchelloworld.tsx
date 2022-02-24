import PropTypes from "prop-types";

/**

  A counter component.

*/
export interface IRCPHelloWorld {

  // Name
  name: string;

}

export function RCHelloWorld(props: IRCPHelloWorld) {

  return <div>Hello {props.name}!</div>;

}

RCHelloWorld.propTypes = {
  name: PropTypes.string.isRequired
}

RCHelloWorld.defaultProps = {
  name: "world"
}
