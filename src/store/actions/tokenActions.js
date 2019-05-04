import axios from "axios";

import * as acttionTypes from "./actionTypes";
import { headerConfig } from "./config";

// GET all tokens
export const loadTokens = () => (dispatch, getState) => {
  dispatch({
    type: acttionTypes.TOKEN_FETCH_START
  });
  axios
    .get("http://localhost:8000/api/token", headerConfig(getState))
    .then(res => {
      dispatch({
        type: acttionTypes.TOKEN_FETCH_SUCCESS,
        payload: res.data
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: acttionTypes.TOKEN_FETCH_FAIL
      });
      dispatch({
        type: acttionTypes.SHOW_ERROR,
        payload: error
      });
    });
};
