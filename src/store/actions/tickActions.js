import * as actionTypes from "./actionTypes";

import { getFormattedTime } from '../../components/Graph/GraphFunctions';


// TICK UPDATE
export const tickStream = () => (dispatch, getState) => {
    var ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");
    
    dispatch({
        type: actionTypes.TICK_UPDATE_START
    });

    const subscribe = {
        ticks_history: "R_50",
        end: "latest",
        start: 1,
        style: "ticks",
        subscribe: 1,
        adjust_start_time: 1,
        count: 100
    };

    ws.onopen = (evt) => {
        ws.send(JSON.stringify(subscribe));
    }

    ws.onerror = (err) => {
        console.log(err);
    }

    ws.onmessage = (msg) => {
        var data = JSON.parse(msg.data);
        if (data.error) {
            console.log(data.error);
            dispatch({
                type: actionTypes.TICK_UPDATE_FAIL
            });
            dispatch({
                type: actionTypes.SHOW_ERROR,
                payload: {
                    status: 406,
                    msg: {
                        tickUpdateError: data.error.message
                    }
                }
            })
        }else if (data.history){
            var tick = [];
            var tempTick;
            const historyArray = data.history;
            for (let i = 0; i < historyArray.prices.length; i++) {
                tempTick = {
                    x: getFormattedTime(parseInt(historyArray.times[i])), 
                    y: parseFloat(historyArray.prices[i])
                };
                tick.push(tempTick);
            }
            dispatch({
                type: actionTypes.TICK_HISTORY_SUCCESS,
                payload: tick
            });
            var sparkTicks = [];
            historyArray.prices.map(element => {
               return sparkTicks.push(parseFloat(element)); 
            });
            dispatch({
                type: actionTypes.SPARKLINES_TICK_HISTORY_SUCCESS,
                payload: sparkTicks
            });
        }else if (data.tick){
            const tick = {
                x: getFormattedTime(parseInt(data.tick.epoch)), 
                y: parseFloat(data.tick.quote)
            };
            dispatch({
                type: actionTypes.TICK_UPDATE_SUCCESS,
                payload: tick
            });
            dispatch({
                type: actionTypes.SPARKLINES_TICK_UPDATE_SUCCESS,
                payload: data.tick.quote
            });
        }
        // ws.close();
    }
}


// TICK UPDATE
export const retrieveExchangeRates = () => (dispatch, getState) => {
    var ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");
    
    dispatch({
        type: actionTypes.EXCHANGE_RATE_RETRIEVE_START
    });

    const subscribe = {
        exchange_rates: 1,
        base_currency: getState().tick.baseCurrancy
    };

    ws.onopen = (evt) => {
        ws.send(JSON.stringify(subscribe));
    }

    ws.onerror = (err) => {
        console.log(err);
    }

    ws.onmessage = (msg) => {
        var data = JSON.parse(msg.data);
        if (data.error) {
            console.log(data.error);
            dispatch({
                type: actionTypes.EXCHANGE_RATE_RETRIEVE_FAIL
            });
            dispatch({
                type: actionTypes.SHOW_ERROR,
                payload: {
                    status: 406,
                    msg: {
                        retrieveExchangeRatesError: data.error.message
                    }
                }
            })
        }else if (data.exchange_rates){
            let exchange_rates = data.exchange_rates;
            exchange_rates.date = getFormattedTime(exchange_rates.date);
            dispatch({
                type: actionTypes.EXCHANGE_RATE_RETRIEVE_SUCCESS,
                payload: exchange_rates
            });
        }
        // ws.close();
    }
}