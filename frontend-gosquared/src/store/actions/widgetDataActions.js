import axios from "axios";
export const TEST_START = "TEST_START";
export const TEST_COMPLETE = "TEST_COMPLETE";
export const TEST_ERROR = "TEST_ERROR";

export const testFunction = () => {
  return dispatch => {
    dispatch({ type: TEST_START });
    axios
      .get("")
      .then(response => {
        dispatch({
          type: TEST_COMPLETE,
          payload: response.data.results
        });
      })
      .catch(err => {
        dispatch({ type: TEST_ERROR });
      });
  };
};
