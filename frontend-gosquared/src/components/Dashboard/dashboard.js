import React, { Component } from "react";
import SideDrawer from "../SideDrawer/sidedrawer";

import "../../styles/css/dashboard.css";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="dashboard-wrapper">
        <SideDrawer />
        <div className="dashboard">k</div>
      </div>
    );
  }
}

export default Dashboard;
