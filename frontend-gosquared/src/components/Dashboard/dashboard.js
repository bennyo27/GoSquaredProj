import React, { Component } from "react";
import SideDrawer from "../SideDrawer/sidedrawer";
import axios from "axios";

import "../../styles/css/dashboard.css";

class Dashboard extends Component {
  state = {
    data: {
      num_drinks: "",
      office_temp: 0,
      plant_sched: "",
      visitors: 0,
      weather: 0
    },
    userConfig: {
      num_drinks: 0,
      office_temp: 0,
      plant_sched: 0,
      visitors: 0,
      weather: 0
    }
  };

  // Grabs GoSquared's top secret information
  getValuableData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/data`, {
        headers: {
          authorization: localStorage.getItem("token")
        }
      })
      .then(response => {
        console.log(response);
        this.setState({
          data: response.data.valuableData
        });
      });
  };

  // Grabs user's dashboard config
  getUserConfig = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user`, {
        headers: {
          authorization: localStorage.getItem("token")
        }
      })
      .then(response => {
        console.log(response);
        this.setState({
          userConfig: response.data.userConfig
        });
      });
  };

  handleChangeWidget = (widget, value) => {
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/${widget}`,
        {
          value: value
        },
        {
          headers: {
            authorization: localStorage.getItem("token")
          }
        }
      )
      .then(response => {
        console.log(response);
        if (this.state[widget] === 0) {
          this.setState(function(prevState) {
            return {
              userConfig: {
                ...prevState.userConfig,
                [widget]: 1
              }
            };
          });
        } else if (this.state[widget] === 1) {
          this.setState(function(prevState) {
            return {
              userConfig: {
                ...prevState.userConfig,
                [widget]: 0
              }
            };
          });
        }
      });
  };

  componentDidMount() {
    this.getValuableData();
    this.getUserConfig();
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="dashboard-wrapper">
        <SideDrawer
          userConfig={this.state.userConfig}
          handleChangeWidget={this.handleChangeWidget}
        />
        <div className="dashboard">k</div>
      </div>
    );
  }
}

export default Dashboard;
