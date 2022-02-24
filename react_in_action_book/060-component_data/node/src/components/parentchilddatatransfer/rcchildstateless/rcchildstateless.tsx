import PropTypes from "prop-types";

/**

  This is a stateless child component.

*/
export interface IRCPChildStateless {

  // Name
  name: string;

  // Age
  age: number;

  // Future
  future: number;

}

export const RCChildStateless = (props: IRCPChildStateless) => {

  const futureAge: number = props.age + props.future;

  return <div>This {props.name}, in {props.future} years, will be {futureAge} years old!</div>;

}

RCChildStateless.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  future: PropTypes.number.isRequired
}

RCChildStateless.defaultProps = {
  name: "",
  age: 0,
  future: 0
}
