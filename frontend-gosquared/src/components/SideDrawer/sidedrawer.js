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
          <div className="widgets">hello</div>
        </Drawer>
        <div className="toggle" onClick={this.toggleDrawer}>
          <img src={menuIcon} />
        </div>
      </div>
    );
  }
}

export default SideDrawer;
