import { combineReducers } from "redux";
import auth from "./auth";
import blog from "./blog";
import error from "./error";
import message from "./message";
import token from "./token";

export default combineReducers({
  auth,
  blog,
  error,
  message,
  token
});
