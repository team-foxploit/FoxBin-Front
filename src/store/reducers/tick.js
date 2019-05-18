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
    globalTicks: [],
    subscribed: false,
    showGraph: false,
    isLoading: false
}

export default function (state=initialState, action, getState) {
    let globalTicks;
    switch (action.type) {
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
                console.log(ticks);
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

            console.log(action.payload);
            return {
                ...state,
                globalTicks: action.payload,
                showGraph: true,
                isLoading: false,
            }
        case actionTypes.TICK_UPDATE_SUCCESS:
            const newTick = action.payload;
            globalTicks = state.globalTicks;
            console.log(globalTicks);
            globalTicks.push(newTick);
            console.log(globalTicks);
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
                subscribed: false,
                isLoading: false,
            }
        default:
            return state;
    }
}