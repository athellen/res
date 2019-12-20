import React from "react";
import Display from "./Display";
class Fire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "hello"
    };
  }
  render() {
    return <Display text={this.state.text} />;
  }
}

export default Fire;
