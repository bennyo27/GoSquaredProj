import React, { Component } from "react";
import axios from "axios";

import "../../styles/css/auth.css";

class Auth extends Component {
  state = {
    username: "",
    password: "",
    registerFlag: false
  };

  handleRegister = () => {
    this.setState(function(prevState) {
      return { registerFlag: !prevState.registerFlag };
    });
  };

  handleInput = evt => {
    console.log(evt);
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  register = () => {
    axios
      .post("http://localhost:3300/users", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  login = () => {};

  componentDidUpdate() {
    console.log(this.state.registerFlag);
  }

  render() {
    return (
      <div className="auth-wrapper">
        <div className="header">
          <div className="image">
            <img
              className="logo"
              src="https://static.gosquared.com/images/nav/logo.png"
            />
          </div>
        </div>
        <div className="content">
          <div className="form">
            <input
              className="text"
              type="text"
              name="username"
              onChange={this.handleInput}
              value={this.state.username}
              placeholder="Username"
            />

            <input
              className="text"
              type="password"
              name="password"
              onChange={this.handleInput}
              value={this.state.password}
              placeholder="Password"
            />

            {this.state.registerFlag ? (
              <button className="button" onClick={this.register}>
                Register
              </button>
            ) : (
              <button className="button" onClick={this.login}>
                Login
              </button>
            )}
          </div>
        </div>
        <div className="switch">
          <button onClick={this.handleRegister}>
            {this.state.registerFlag
              ? "Click here to login!"
              : " Click here to register!"}
          </button>
        </div>
      </div>
    );
  }
}

export default Auth;
