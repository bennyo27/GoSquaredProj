import React, { Component } from "react";

import "../../styles/css/auth.css";

class Auth extends Component {
  state = {
    usename: "",
    password: "",
    registerFlag: false
  };

  handleRegister = () => {
    this.setState(function(prevState) {
      return { registerFlag: !prevState.registerFlag };
    });
  };

  register = () => {};

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
            <form
              onSubmit={
                this.state.registerFlag ? this.registerUser : this.loginUser
              }
            >
              <input
                className="text"
                type="text"
                name="username"
                value={this.state.username}
                placeholder="Username"
              />

              <input
                className="text"
                type="password"
                name="password"
                value={this.state.password}
                placeholder="Password"
              />

              {this.state.registerFlag ? (
                <input className="button" type="submit" value="Register" />
              ) : (
                <input className="button" type="submit" value="Login" />
              )}
            </form>
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
