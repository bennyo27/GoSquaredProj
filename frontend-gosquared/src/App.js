import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Switch } from "react-router-dom";

// --> Components List
import Auth from "./components/Auth/auth";
import PrivateRoute from "./components/Private-Route/private-route";
import Dashboard from "./components/Dashboard/dashboard";

// CSS IMPORT
import "./styles/css/app.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/auth" component={Auth} />
          <PrivateRoute
            exact
            path="/dashboard"
            component={Dashboard}
            // props
            // example={this.state.example}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(App)
);
