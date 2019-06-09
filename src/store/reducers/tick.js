import * as actionTypes from "../actions/actionTypes";

const initialState = {
    ticks: [
        {
            component: null,
            ticks: [],
            isLoading: false,
            isLoaded: null,
        }
    ],
    baseCurrancy: "USD",
    exchangeRates: {
        isLoading: false,
        isUpdated: false,
    },
    globalTicks: [],
    sparkLineTicks: [],
    showSparkLine: false,
    subscribed: false,
    showGraph: false,
    symbol: 'R_100',
    market: {

    },
    isLoading: false
}

export default function (state=initialState, action, getState) {
    let globalTicks;
    let sparkLineTicks;
    switch (action.type) {
        
        // GLOBALTICK 
        case actionTypes.TICK_UPDATE_START:
            if (action.payload) {
                let ticks = state.ticks;
                const newComponent = {
                    component: action.payload.component,
                    ticks: [],
                    subscribed: true,
                    isLoading: true,
                    isLoaded: false,
                }
                ticks.push(newComponent);
                return {
                    ...state,
                    ticks: ticks,
                    isLoading: true
                }
            } else {
                return {
                    ...state,
                    isLoading: true
                }
            }
        case actionTypes.TICK_HISTORY_SUCCESS:
            return {
                ...state,
                globalTicks: action.payload,
                showGraph: true,
                isLoading: false,
            }
        case actionTypes.TICK_UPDATE_SUCCESS:
            const newTick = action.payload;
            globalTicks = state.globalTicks;
            globalTicks.push(newTick);
            return {
                ...state,
                globalTicks: globalTicks,
                showGraph: true,
                isLoading: false,
            }
        case actionTypes.TICK_UPDATE_FAIL:
            return {
                ...state,
                showGraph: false,
                showSparkLine: false,
                subscribed: false,
                isLoading: false,
            }
        
        // SPARKLINE
        case actionTypes.SPARKLINES_TICK_HISTORY_SUCCESS:
            return {
                ...state,
                showSparkLine: true,
                sparkLineTicks: action.payload
            }
        case actionTypes.SPARKLINES_TICK_UPDATE_SUCCESS:
            const newSparkLineTick = action.payload;
            sparkLineTicks = state.sparkLineTicks;
            sparkLineTicks.push(newSparkLineTick);
            return {
                ...state,
                showSparkLine: true,
                sparkLineTicks: sparkLineTicks
            }

        // FOREIGN EXCHANGE RATE
        case actionTypes.EXCHANGE_RATE_RETRIEVE_START:
            return{
                ...state,
                exchangeRates: {
                    ...state.exchangeRates,
                    isLoading: true,
                }   
            }
        case actionTypes.EXCHANGE_RATE_RETRIEVE_SUCCESS:
            return {
                ...state,
                baseCurrancy: action.payload.base_currency,
                exchangeRates: {
                    ...state.exchangeRates,
                    isLoading: false,
                    isUpdated: false,
                    ...action.payload
                }
            }
        case actionTypes.MARKET_INFO_FETCH_START:
            return {
                ...state,
                market: false
            }
        case actionTypes.MARKET_INFO_FETCH_SUCCESS:
            return {
                ...state,
                market: action.payload
            }
        case actionTypes.MARKET_INFO_FETCH_FAIL:
            return {
                ...state,
                market: 'failed'
            }
        case actionTypes.EXCHANGE_RATE_RETRIEVE_FAIL:
            return {
                ...state,
                exchangeRates: {
                    ...state.exchangeRates,
                    isLoading: false
                }
            }
        default:
            return state;
    }
}