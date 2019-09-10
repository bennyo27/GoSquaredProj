import {
  GET_DATA_START,
  GET_DATA_COMPLETE,
  GET_DATA_ERROR,
  GET_USER_CONFIG_START,
  GET_USER_CONFIG_COMPLETE,
  GET_USER_CONFIG_ERROR,
  HANDLE_WIDGET_START,
  HANDLE_WIDGET_COMPLETE,
  HANDLE_WIDGET_ERROR
} from "../actions/widgetDataActions";

const initialState = {
  data: {
    num_drinks: "",
    office_temp: 0,
    plant_sched: "",
    visitors: 0,
    weather: 0
  },
  fetchingData: false,
  fetchedData: false,
  userConfig: {
    num_drinks: false,
    office_temp: false,
    plant_sched: false,
    visitors: false,
    weather: false
  },
  fetchingUserConfig: false,
  fetchedUserConfig: false,
  error: ""
};

const widgetDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_START:
      return {
        ...state,
        fetchingData: true
      };

    case GET_DATA_COMPLETE:
      return {
        ...state,
        data: action.payload,
        fetchingData: true,
        fetchedData: true
      };

    case GET_DATA_ERROR:
      return {
        ...state,
        error: "Error getting data."
      };

    case GET_USER_CONFIG_START:
      return {
        ...state,
        fetchingUserConfig: true
      };

    case GET_USER_CONFIG_COMPLETE:
      return {
        ...state,
        userConfig: action.payload,
        fetchingUserConfig: true,
        fetchedUserConfig: true
      };

    case GET_USER_CONFIG_ERROR:
      return {
        ...state,
        error: "Error getting data."
      };

    case HANDLE_WIDGET_START:
      return {
        ...state
      };

    case HANDLE_WIDGET_COMPLETE:
      return {
        ...state,
        userConfig: { ...state.userConfig, [action.widget]: action.value }
      };

    case HANDLE_WIDGET_ERROR:
      return {
        ...state,
        error: "Error handling data."
      };

    default:
      return state;
  }
};

export default widgetDataReducer;
