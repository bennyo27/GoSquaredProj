import {
  TEST_START,
  TEST_COMPLETE,
  TEST_ERROR
} from "../actions/widgetDataActions";

const initialState = {
  testing: false,
  tested: false,
  error: ""
};

const widgetDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_START:
      return {
        ...state,
        testing: true
      };

    case TEST_COMPLETE:
      return {
        ...state,
        movies: action.payload,
        testing: true,
        tested: true
      };

    case TEST_ERROR:
      return {
        ...state,
        error: "Error testing"
      };

    default:
      return state;
  }
};

export default widgetDataReducer;
