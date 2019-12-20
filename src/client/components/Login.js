import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleButton(event) {
    event.preventDefault();
    alert(`email: ${this.state.email} password ${this.state.password}`);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <form>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <br />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
        </form>
        <div>
          <button onClick={this.handleButton}>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
