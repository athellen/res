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
      //
      <div className="loginCard" style={{ width: "100vw", height: "100vh" }}>
        <div
          className="card"
          style={{ width: "22rem", height: "22rem", opacity: "0.6" }}
        >
          <div className="card-body">
            <h5 className="card-title">Login</h5>
            <hr />
            <form>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
