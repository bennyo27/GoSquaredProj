import React, { Component } from "react";

// imports for material ui
import Drawer from "@material-ui/core/Drawer";

import "../../styles/css/sidedrawer.css";

// import icons
import menuIcon from "../../images/menu.svg";
import plusIcon from "../../images/plus.svg";
import minusIcon from "../../images/minus.svg";

import visitorsIcon from "../../images/visitors.svg";
import officeTempIcon from "../../images/thermometer.svg";
import plantSchedIcon from "../../images/droplet.svg";
import weatherIcon from "../../images/weather.svg";
import numDrinksIcon from "../../images/coffee.svg";

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
            <div
              className="widget"
              onClick={() => {
                if (this.props.userConfig.visitors === 0) {
                  this.props.handleChangeWidget("visitors", true);
                } else {
                  this.props.handleChangeWidget("visitors", false);
                }
              }}
            >
              <div className="icon">
                <img src={visitorsIcon} />
              </div>
              <div className="title">Visitors Online</div>
              <div className="active">
                {this.props.userConfig.visitors === 0 ? (
                  <img src={plusIcon} />
                ) : (
                  <img src={minusIcon} />
                )}
              </div>
            </div>
            <div className="widget">
              <div className="icon">
                <img src={officeTempIcon} />
              </div>
              <div className="title">Office Temperature</div>
              <div className="active">
                {this.props.userConfig.office_temp === 0 ? (
                  <img src={plusIcon} />
                ) : (
                  <img src={minusIcon} />
                )}
              </div>
            </div>
            <div className="widget">
              <div className="icon">
                <img src={plantSchedIcon} />
              </div>
              <div className="title">Plant Schedule</div>
              <div className="active">
                {this.props.userConfig.plant_sched === 0 ? (
                  <img src={plusIcon} />
                ) : (
                  <img src={minusIcon} />
                )}
              </div>
            </div>
            <div className="widget">
              <div className="icon">
                <img src={weatherIcon} />
              </div>
              <div className="title">Weather</div>
              <div className="active">
                {this.props.userConfig.weather === 0 ? (
                  <img src={plusIcon} />
                ) : (
                  <img src={minusIcon} />
                )}
              </div>
            </div>
            <div className="widget">
              <div className="icon">
                <img src={numDrinksIcon} />
              </div>
              <div className="title">Number of Drinks</div>
              <div className="active">
                {this.props.userConfig.num_drinks === 0 ? (
                  <img src={plusIcon} />
                ) : (
                  <img src={minusIcon} />
                )}
              </div>
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
