import * as actionTypes from "./actionTypes";
var WebSocket = require('websocket').w3cwebsocket;
// PREDICTION_START
// PREDICTION_SUCCESS
// PREDICTION_FAIL
export const predict = (dispatch, getState) => {

    let ws = new WebSocket('ws://127.0.0.1:8000/ml/');
    console.log(ws);
    ws.onopen = (evt) => {
        console.log('Open');
        dispatch({
            type: actionTypes.PREDICTION_START
        });
        ws.send(JSON.stringify({test: "Prediction"}));
    }

    ws.onmessage = (msg) => {
        console.log('Message', msg);
    }

    ws.onerror = (error) => {
        console.log('Error', error);
    }

}