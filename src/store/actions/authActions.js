import axios from "axios";

import * as actionTypes from "./actionTypes";
import { headerConfig } from "./config";

// LOGIN USER
export const login = user => dispatch => {
  dispatch({
    type: actionTypes.AUTH_START
  });
  axios
    .post("http://localhost:8000/api/auth/login", user)
    .then(res => {
      dispatch({
        type: actionTypes.AUTH_SUCCESS,
        payload: res.data
      });
    })
    .catch(error => {
      const errors = {
        msg: error.response.data,
        status: error.response.status
      };
      dispatch({
        type: actionTypes.AUTH_FAIL
      });
      dispatch({
        type: actionTypes.SHOW_ERROR,
        payload: errors
      });
    });
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.AUTH_START
  });
  axios
    .post(
      "http://localhost:8000/api/auth/logout/",
      null,
      headerConfig(getState)
    )
    .then(res => {
      dispatch({
        type: actionTypes.USER_LOGOUT
      });
    })
    .catch(error => {
      console.log(error);
      const errors = {
        msg: error.response.data,
        status: error.response.status
      };
      dispatch({
        type: actionTypes.AUTH_FAIL
      });
      dispatch({
        type: actionTypes.SHOW_ERROR,
        payload: errors
      });
    });
};

// REGISTER USER
export const register = user => dispatch => {
  dispatch({
    type: actionTypes.AUTH_START
  });
  axios
    .post("http://localhost:8000/api/auth/register", user)
    .then(res => {
      dispatch({
        type: actionTypes.AUTH_SUCCESS,
        payload: res.data
      });
    })
    .catch(error => {
      const errors = {
        msg: error.response.data,
        status: error.response.status
      };
      dispatch({
        type: actionTypes.AUTH_FAIL
      });
      dispatch({
        type: actionTypes.SHOW_ERROR,
        payload: errors
      });
    });
};

// LOAD USER
export const loadUser = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.USER_LOADING
  });
  axios
    .get("http://localhost:8000/api/auth/user", headerConfig(getState))
    .then(res => {
      dispatch({
        type: actionTypes.USER_LOADED,
        payload: res.data
      });
    })
    .catch(error => {
      dispatch({
        type: actionTypes.AUTH_FAIL
      });
      dispatch({
        type: actionTypes.SHOW_ERROR,
        payload: error
      });
    });
};
