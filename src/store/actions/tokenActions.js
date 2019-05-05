import axios from "axios";

import * as actionTypes from "./actionTypes";
import { headerConfig } from "./config";

/*
* ---- FOXBINARY API calls ----
*/

// GET all tokens
export const loadTokens = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.TOKEN_FETCH_START
  });
  axios
    .get("http://localhost:8000/api/token", headerConfig(getState))
    .then(res => {
      dispatch({
        type: actionTypes.TOKEN_FETCH_SUCCESS,
        payload: res.data
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: actionTypes.TOKEN_FETCH_FAIL
      });
      dispatch({
        type: actionTypes.SHOW_ERROR,
        payload: error
      });
    });
};


/*
* ---- BINARY.COM API calls ----
*/


// Validate token
export const validateToken = (token) => (dispatch) => {
  const ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");
  dispatch({
    type: actionTypes.TOKEN_VALIDATION_START
  });

  ws.onopen = (evt) => {
    ws.send(
      JSON.stringify({
        authorize: token
      })
    );
  };

  ws.onerror = (err) => {
    console.log(err);
    ws.close();
  }

  ws.onmessage = (msg) => {
    var data = JSON.parse(msg.data);
    if (data.error) {
      console.log(data.error);
      dispatch({
        type: actionTypes.TOKEN_VALIDATION_FAIL
      });
      dispatch({
        type: actionTypes.SHOW_ERROR,
        payload: {
          status: 406,
          msg: {
            invalidTokenError: data.error.message
          }
        }
      })
    }
    if (data.authorize){
      const token = data.echo_req.authorize;
      const userDetails = data.authorize;
      dispatch({
        type: actionTypes.TOKEN_VALIDATION_SUCCESS,
        payload: {
          token,
          userDetails
        }
      });
    }
    ws.close();
  };
}