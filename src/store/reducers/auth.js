import * as actionTypes from '../actions/actionTypes';

const initialState = {
    foxToken: null,
    webAPI: {
        token: null
    },
    user: {},
    isAuthenticated: false,
    isLoading: false
}

export default function (state=initialState, action) {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                webAPI: {
                    ...state.webAPI
                },
                isLoading: true
            };
        case actionTypes.AUTH_SUCCESS:
            // localStorage.setItem('foxToken', action.payload.token);
            return {
                ...state,
                webAPI: {
                    ...state.webAPI
                },
                user: action.payload.user,
                foxToken: action.payload.token,
                isAuthenticated: true,
                isLoading: false
            };
        case actionTypes.AUTH_FAIL:
            localStorage.removeItem('foxToken');
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                user: null,
                foxToken: null,
                webAPI: {
                    ...state.webAPI
                }
            };
        default:
            return state;
    }
}