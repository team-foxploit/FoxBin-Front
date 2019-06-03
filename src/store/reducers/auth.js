import * as actionTypes from '../actions/actionTypes';

const initialState = {
    foxToken: localStorage.getItem('foxToken'),
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
        case actionTypes.USER_LOADING:
            const foxToken = localStorage.getItem('foxToken');
            return {
                ...state,
                webAPI: {
                    ...state.webAPI
                },
                isLoading: true,
                foxToken: foxToken
            };
        case actionTypes.USER_LOADED:
            return {
                ...state,
                webAPI: {
                    ...state.webAPI
                },
                user: action.payload,
                isLoading: false,
                isAuthenticated: true
            };
        case actionTypes.AUTH_SUCCESS:
            localStorage.setItem('foxToken', action.payload.token);
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
        case actionTypes.USER_LOGOUT:
            localStorage.removeItem('foxToken');
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                user: null,
                foxToken: null,
                webAPI: {
                    token: null
                }
            };
        case actionTypes.AUTH_FAIL:
            localStorage.removeItem('foxToken');
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                user: {},
                foxToken: null,
                webAPI: {
                    ...state.webAPI
                }
            };
        default:
            return state;
    }
}
