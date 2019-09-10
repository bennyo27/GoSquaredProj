import React, { Component } from "react";
import ReactDOM from "react-dom";

import { connect } from "react-redux";

import { getData } from "../../store/actions/widgetDataActions";

import AnimatedNumber from "react-animated-number";

import "../../styles/css/widgets.css";

// import libraries
import Thermometer from "react-thermometer-component";
import NumericLabel from "react-pretty-numbers";
import Countdown from "react-countdown-now";

// import icons
import visitorsIcon from "../../images/visitors.svg";
import officeTempIcon from "../../images/thermometer.svg";
import plantSchedIcon from "../../images/droplet.svg";
import weatherIcon from "../../images/weather.svg";
import numDrinksIcon from "../../images/coffee.svg";

class Widgets extends Component {
  state = {
    timer:
      this.props.data.plant_sched > 0
        ? Date.now() + this.props.data.plant_sched * 60 * 60 * 1000
        : Date.now() + 13 * 60 * 60 * 1000
  };

  componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <div className="widgets-container">
        {this.props.userConfig.num_drinks === true ||
          (this.props.userConfig.num_drinks === 1 && (
            <div className="widget num_drinks">
              <div className="header">
                <h2>Number of Drinks</h2>
              </div>
              <div className="content">
                <img src={numDrinksIcon} />
                <p>We have {this.props.data.num_drinks}, honestly!</p>
              </div>
            </div>
          ))}
        {this.props.userConfig.office_temp === true ||
          (this.props.userConfig.office_temp === 1 && (
            <div className="widget office_temp">
              <div className="header">
                <h2>Office Temperature</h2>
              </div>
              <div className="content">
                <Thermometer
                  className="thermometer"
                  theme="light"
                  value={this.props.data.office_temp}
                  max="100"
                  steps="3"
                  format="°F"
                  size="large"
                  height="200"
                />
                <p>
                  Our high tech systems tell us it's{" "}
                  {this.props.data.office_temp} degrees!
                </p>
              </div>
            </div>
          ))}
        {this.props.userConfig.plant_sched === true ||
          (this.props.userConfig.plant_sched === 1 && (
            <div className="widget plant_sched">
              <div className="header">
                <h2>Plant Watering Schedule</h2>
              </div>
              <div className="content">
                <Countdown
                  date={this.state.timer}
                  onTick={() => {
                    this.setState({
                      timer: this.state.timer - 1
                    });
                  }}
                />
                <p>
                  Please water the plants in t-minus{" "}
                  {this.props.data.plant_sched}!
                </p>
              </div>
            </div>
          ))}
        {this.props.userConfig.visitors === true ||
          (this.props.userConfig.visitors === 1 && (
            <div className="widget visitors">
              <div className="header">
                <h2>Visitors</h2>
              </div>
              <div className="content">
                <AnimatedNumber
                  component="text"
                  value={this.props.data.visitors}
                  style={{
                    transition: "0.8s ease-out",
                    fontSize: 48,
                    transitionProperty: "background-color, color, opacity"
                  }}
                  frameStyle={perc =>
                    perc === 100 ? {} : { backgroundColor: "#ffeb3b" }
                  }
                  duration={300}
                  formatValue={n => <NumericLabel>{n}</NumericLabel>}
                />
                <p>
                  {" "}
                  visitors <span style={{ color: "green" }}>online</span>!
                </p>
              </div>
            </div>
          ))}
        {this.props.userConfig.weather === true ||
          (this.props.userConfig.weather === 1 && (
            <div className="widget weather">
              <div className="header">
                <h2>Weather</h2>
              </div>
              <div className="content">
                <div className="weather">
                  <img src={weatherIcon} />
                </div>
                <p>{this.props.data.weather}˚</p>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

// mapStateToProps
const mapStateToProps = state => ({
  data: state.widgetDataReducer.data
});

export default connect(
  mapStateToProps,
  { getData }
)(Widgets);
