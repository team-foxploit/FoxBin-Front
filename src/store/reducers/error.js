import * as actionTypes from '../actions/actionTypes';

const initialState = {
    error: {},
    status: null
}

export default function (state=initialState, action) {
    switch (action.type) {
        case actionTypes.GET_ERRORS:
            return {
                error: action.payload.msg,
                status: action.payload.status
            }
        default:
            return state;
    }
}