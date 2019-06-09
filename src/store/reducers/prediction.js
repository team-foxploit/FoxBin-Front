import * as actionTypes from "../actions/actionTypes";

const initialState = {
    showResult: false,
    isLoading: false,
    isLoaded: false,
    result: []
}

export default function (state=initialState, action, getState) {

    switch (action.type) {
        case actionTypes.PREDICTION_START:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.PREDICTION_SUCCESS:
            return {
                isLoading: false,
                isLoaded: true,
                showResult: true,
                result: action.payload
            }
        case actionTypes.PREDICTION_FAIL:
            return {
                showResult: false,
                isLoading: false,
                isLoaded: true,
                result: []
            }
        default:
            return state;
    }
}