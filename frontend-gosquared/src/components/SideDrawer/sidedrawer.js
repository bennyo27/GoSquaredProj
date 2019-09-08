import React, { Component } from "react";

// imports for material ui
import Drawer from "@material-ui/core/Drawer";

import "../../styles/css/sidedrawer.css";

// import icons
import menuIcon from "../../images/menu.svg";

class SideDrawer extends Component {
  state = {
    left: false
  };

  toggleDrawer = () => {
    console.log("DRAWER FUNC IS WORKING");
    this.setState(function(prevState) {
      return { left: !prevState.left };
    });
  };

  render() {
    return (
      <div className="drawer-wrapper">
        <Drawer
          className="drawer"
          open={this.state.left}
          onClose={this.toggleDrawer}
        >
          <div className="header">
            <img src="https://static.gosquared.com/images/nav/logo.png" />
          </div>
          <div className="widgets">
            <div className="widget">
              <div className="icon">
                <img />
              </div>
              <div className="icon">
                <img />
              </div>
              <div className="title">Visitors Online</div>
              <div className="active"></div>
            </div>
            <div className="widget">
              <div className="icon">
                <img />
              </div>
              <div className="title">Office Temperature</div>
              <div className="active"></div>
            </div>
            <div className="widget">
              <div className="icon">
                <img />
              </div>
              <div className="title">Plant Schedule</div>
              <div className="active"></div>
            </div>
            <div className="widget">
              <div className="icon">
                <img />
              </div>
              <div className="title">Weather</div>
              <div className="active"></div>
            </div>
            <div className="widget">
              <div className="icon">
                <img />
              </div>
              <div className="title">Number of Drinks</div>
              <div className="active"></div>
            </div>
          </div>
        </Drawer>
        <div className="toggle" onClick={this.toggleDrawer}>
          <img src={menuIcon} />
        </div>
      </div>
    );
  }
}

export default SideDrawer;
