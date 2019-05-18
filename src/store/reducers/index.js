import { combineReducers } from "redux";
import auth from "./auth";
import error from "./error";
import message from "./message";
import webapi from "./webapi";

export default combineReducers({
  auth,
  error,
  message,
  webapi
});
