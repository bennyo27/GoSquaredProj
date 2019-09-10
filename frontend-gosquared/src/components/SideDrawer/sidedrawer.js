import React, { Component } from "react";

// imports for material ui
import Drawer from "@material-ui/core/Drawer";

import "../../styles/css/sidedrawer.css";

// import icons
import menuIcon from "../../images/menu.svg";
import plusIcon from "../../images/plus.svg";
import minusIcon from "../../images/minus.svg";

import { connect } from "react-redux";
import { handleChangeWidget } from "../../store/actions/widgetDataActions";

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
            {console.log(this.props.userConfig.visitors)}
            <div
              className="widget"
              onClick={() => {
                if (
                  this.props.userConfig.visitors === false ||
                  this.props.userConfig.visitors === 0
                ) {
                  this.props.handleChangeWidget("visitors", true);
                } else {
                  this.props.handleChangeWidget("visitors", false);
                }
              }}
            >
              <div className="title">
                <p>Visitors</p>
              </div>
              <div className="active">
                {this.props.userConfig.visitors === false ||
                this.props.userConfig.visitors === 0 ? (
                  <img src={plusIcon} />
                ) : (
                  <img src={minusIcon} />
                )}
              </div>
            </div>
            <div
              className="widget"
              onClick={() => {
                if (
                  this.props.userConfig.office_temp === false ||
                  this.props.userConfig.office_temp === 0
                ) {
                  this.props.handleChangeWidget("office_temp", true);
                } else {
                  this.props.handleChangeWidget("office_temp", false);
                }
              }}
            >
              <div className="title">
                <p>Office Temperature</p>
              </div>
              <div className="active">
                {this.props.userConfig.office_temp === false ||
                this.props.userConfig.office_temp === false ? (
                  <img src={plusIcon} />
                ) : (
                  <img src={minusIcon} />
                )}
              </div>
            </div>
            <div
              className="widget"
              onClick={() => {
                if (
                  this.props.userConfig.plant_sched === false ||
                  this.props.userConfig.plant_sched === 0
                ) {
                  this.props.handleChangeWidget("plant_sched", true);
                } else {
                  this.props.handleChangeWidget("plant_sched", false);
                }
              }}
            >
              <div className="title">
                <p>Plant Schedule</p>
              </div>
              <div className="active">
                {this.props.userConfig.plant_sched === false ||
                this.props.userConfig.plant_sched === 0 ? (
                  <img src={plusIcon} />
                ) : (
                  <img src={minusIcon} />
                )}
              </div>
            </div>
            <div
              className="widget"
              onClick={() => {
                if (
                  this.props.userConfig.weather === false ||
                  this.props.userConfig.weather === 0
                ) {
                  this.props.handleChangeWidget("weather", true);
                } else {
                  this.props.handleChangeWidget("weather", false);
                }
              }}
            >
              <div className="title">
                <p>Weather</p>
              </div>
              <div className="active">
                {this.props.userConfig.weather === false ||
                this.props.userConfig.weather === 0 ? (
                  <img src={plusIcon} />
                ) : (
                  <img src={minusIcon} />
                )}
              </div>
            </div>
            <div
              className="widget"
              onClick={() => {
                if (
                  this.props.userConfig.num_drinks === false ||
                  this.props.userConfig.num_drinks === 0
                ) {
                  this.props.handleChangeWidget("num_drinks", true);
                } else {
                  this.props.handleChangeWidget("num_drinks", false);
                }
              }}
            >
              <div className="title">
                <p>Number of Drinks</p>
              </div>
              <div className="active">
                {this.props.userConfig.num_drinks === false ||
                this.props.userConfig.num_drinks === 0 ? (
                  <img src={plusIcon} />
                ) : (
                  <img src={minusIcon} />
                )}
              </div>
            </div>
            <div
              className="logout"
              onClick={() => {
                localStorage.removeItem("token");
                this.props.redirectToAuth();
              }}
            >
              <p>Logout</p>
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

// mapStateToProps
const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { handleChangeWidget }
)(SideDrawer);
