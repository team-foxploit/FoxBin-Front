import { combineReducers } from "redux";
import auth from "./auth";
import error from "./error";
import message from "./message";
import tick from "./tick";
import webapi from "./webapi";

export default combineReducers({
  auth,
  error,
  message,
  tick,
  webapi
});
