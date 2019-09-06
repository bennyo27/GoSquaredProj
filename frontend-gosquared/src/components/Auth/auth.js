import React, { Component } from "react";

import "../../styles/css/auth.css";

class Auth extends Component {
  state = {
    registerFlag: false
  };

  handleRegister = () => {
    this.setState(function(prevState) {
      return { registerFlag: !prevState.registerFlag };
    });
  };

  componentDidUpdate() {
    console.log(this.state.registerFlag);
  }

  render() {
    return (
      <div className="auth-wrapper">
        <div className="header">GoSquared</div>
        <div className="content">
          <div className="form"></div>
        </div>
        <div className="switch">
          <button onClick={this.handleRegister}>Register Here</button>
        </div>
      </div>
    );
  }
}

export default Auth;
