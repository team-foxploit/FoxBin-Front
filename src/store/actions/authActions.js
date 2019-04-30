import axios from "axios";

import * as actionTypes from "./actionTypes";
import { headerConfig } from './config';

// LOGIN USER
export const login = (user) => (dispatch) => {
    dispatch({
        type: actionTypes.AUTH_START
    });
    axios.post("https://foxbin-api.herokuapp.com/api/auth/login", user)
    .then((res) => {
        console.log(res);
        dispatch({
            type: actionTypes.AUTH_SUCCESS,
            payload: res.data
        });
    })
    .catch((error) => {
        dispatch({
            type: actionTypes.AUTH_FAIL
        })
    });
}