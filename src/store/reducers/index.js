import { combineReducers } from "redux";
import auth from "./auth";
import error from "./error";
import message from "./message";
import tick from "./tick";
import prediction from "./prediction";
import webapi from "./webapi";

export default combineReducers({
  auth,
  error,
  prediction,
  message,
  tick,
  webapi
});
