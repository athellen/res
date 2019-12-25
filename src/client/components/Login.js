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
    console.log(this.state);
    return (
      <div className="col" align="center">
        <div className="card loginCard">
          <h2>LOGIN</h2>
          <form>
            <div className="inputWithIcon">
              <input
                className="form-control loginform"
                type="email"
                name="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>

            <br />
            <input
              className="form-control loginform"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </form>
          <div>
            <button className="btn loginbtn" onClick={this.handleButton}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
