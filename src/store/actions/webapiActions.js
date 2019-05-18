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
    .get("https://foxbin-api.herokuapp.com/api/token", headerConfig(getState))
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

// ADD token
export const addToken = (token) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.TOKEN_ADD_START
  });
  axios
    .post("https://foxbin-api.herokuapp.com/api/token/", token, headerConfig(getState))
    .then(res => {
      var tokens = getState().token.tokens;
      var tokens = getState().webapi.tokens;
      var newToken = {
        id: res.data.id,
        token:  res.data.token,
        active:  true,
        created_at:  res.data.created_at
      };
      if(tokens.length > 0){
        var secondToken= tokens.shift();
        secondToken['active'] = false;
        tokens.splice(0, 0, newToken, secondToken);
      }else{
        tokens= [newToken];
      }
      dispatch({
        type: actionTypes.TOKEN_ADD_SUCCESS,
        payload: tokens
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: actionTypes.TOKEN_ADD_FAIL
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
  var ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");
  console.log(token);
  dispatch({
    type: actionTypes.TOKEN_VALIDATION_START
  });

  ws.onopen = (evt) => {
    ws.send(
      JSON.stringify({
        authorize: token
      })
    );
  }

  ws.onerror = (err) => {
    console.log(err);
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
      dispatch({
        type: actionTypes.CREATE_MESSAGE,
        payload: {
          tokenValidated: "Token is valid!"
        }
      });
    }
    ws.close();
  };
}


// Login History
export const fetchLoginHistory = () => (dispatch, getState) => {
  var ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");
  const activeToken = getState().webapi.activeToken;
  dispatch({
    type: actionTypes.LOGIN_HISTORY_FETCH_START
  });

  ws.onopen = (evt) => {
    ws.send(
      JSON.stringify({
        authorize: activeToken
      })
    );
  }

  ws.onerror = (err) => {
    console.log(err);
  }

  ws.onmessage = (msg) => {
    var data = JSON.parse(msg.data);
    if (data.error) {
      console.log(data.error);
      dispatch({
        type: actionTypes.LOGIN_HISTORY_FETCH_FAIL
      });
      dispatch({
        type: actionTypes.SHOW_ERROR,
        payload: {
          status: 406,
          msg: {
            invalidTokenError: data.error.message
          }
        }
      });
    }else if(data.authorize){
      ws.send(
        JSON.stringify({
          login_history: 1,
          limit: 20
        })
      );
    }else if (data.login_history){
      dispatch({
        type: actionTypes.LOGIN_HISTORY_FETCH_SUCCESS,
        payload: data.login_history
      });
      // ws.close();
    }
  };
}