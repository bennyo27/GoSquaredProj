import axios from "axios";

// Data from api
export const GET_DATA_START = "GET_DATA_START";
export const GET_DATA_COMPLETE = "GET_DATA_COMPLETE";
export const GET_DATA_ERROR = "GET_DATA_ERROR";

export const GET_USER_CONFIG_START = "GET_USER_CONFIG_START";
export const GET_USER_CONFIG_COMPLETE = "GET_USER_CONFIG_COMPLETE";
export const GET_USER_CONFIG_ERROR = "GET_USER_CONFIG_ERROR";

export const HANDLE_WIDGET_START = "HANDLE_WIDGET_START";
export const HANDLE_WIDGET_COMPLETE = "HANDLE_WIDGET_COMPLETE";
export const HANDLE_WIDGET_ERROR = "HANDLE_WIDGET_START";

// Grabs data from api for dashboard
export const getData = () => {
  return dispatch => {
    dispatch({ type: GET_DATA_START });
    axios
      .get(`${process.env.REACT_APP_API_URL}/data`, {
        headers: {
          authorization: localStorage.getItem("token")
        }
      })
      .then(response => {
        dispatch({
          type: GET_DATA_COMPLETE,
          payload: response.data.valuableData
        });
      })
      .catch(err => {
        dispatch({ type: GET_DATA_ERROR });
      });
  };
};

// Grabs user's config for dashboard
export const getUserConfig = () => {
  return dispatch => {
    dispatch({ type: GET_USER_CONFIG_START });
    axios
      .get(`${process.env.REACT_APP_API_URL}/user`, {
        headers: {
          authorization: localStorage.getItem("token")
        }
      })
      .then(response => {
        console.log("response", response);
        dispatch({
          type: GET_USER_CONFIG_COMPLETE,
          payload: response.data.userConfig
        });
      })
      .catch(err => {
        dispatch({ type: GET_USER_CONFIG_ERROR });
      });
  };
};

// Handles change in user's widget config
export const handleChangeWidget = (widget, value) => {
  return dispatch => {
    dispatch({ type: HANDLE_WIDGET_START });
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
        console.log(value, widget, response);
        dispatch({
          type: HANDLE_WIDGET_COMPLETE,
          value: value === true ? 1 : 0,
          widget: widget
        });
      })
      .catch(err => {
        dispatch({ type: HANDLE_WIDGET_ERROR });
      });
  };
};
