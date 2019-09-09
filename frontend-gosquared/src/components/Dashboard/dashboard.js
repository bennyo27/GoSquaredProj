import React, { Component } from "react";
import SideDrawer from "../SideDrawer/sidedrawer";
import axios from "axios";
import { connect } from "react-redux";
import {
  getData,
  getUserConfig,
  handleChangeWidget
} from "../../store/actions/widgetDataActions";

import "../../styles/css/dashboard.css";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getData();
    this.props.getUserConfig();
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="dashboard-wrapper">
        <SideDrawer userConfig={this.props.userConfig} />
        <div className="dashboard">k</div>
      </div>
    );
  }
}

// mapStateToProps
const mapStateToProps = state => ({
  data: state.widgetDataReducer.data,
  userConfig: state.widgetDataReducer.userConfig
});

export default connect(
  mapStateToProps,
  { getData, getUserConfig, handleChangeWidget }
)(Dashboard);
