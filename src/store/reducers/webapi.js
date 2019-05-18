import * as actionTypes from '../actions/actionTypes';

const initialState = {
    tokens: [],
    activeToken: "",
    isLoading: false,
    isValidating: false,
    isValidated: null,
    history: {
        isLoading: false,
        loginHistory: []
    },
    userDetails: null
}

export default function (state=initialState, action) {
    switch (action.type) {
        
        // Token Fetching [FoxBinary]
        case actionTypes.TOKEN_ADD_START:
        case actionTypes.TOKEN_FETCH_START:
            return {
                ...state,
                isLoading: true
            };
        case actionTypes.TOKEN_FETCH_SUCCESS:
            var tokens = [];
            var token = {};
            var activeToken;
            if(action.payload.length > 0){
                for(let i = action.payload.length - 1 ; i >= 0 ; i--) {
                    token = {
                        id: action.payload[i].id,
                        token: action.payload[i].token,
                        created_at: action.payload[i].created_at
                    }
                    if(i === action.payload.length - 1){
                        activeToken = token.token;
                        token = {
                            ...token,
                            active: true,
                        }
                    }else{
                        token = {
                            ...token,
                            active: false
                        }
                    }
                    tokens.push(token);
                }
            }
            return {
                ...state,
                tokens: tokens,
                activeToken: activeToken,
                isLoading: false
            };
        case actionTypes.TOKEN_FETCH_FAIL:
            return{
                tokens: [],
                isLoading: false
            }

        case actionTypes.TOKEN_ADD_SUCCESS:
            console.log(action.payload);
            const newTokens = action.payload;
            return {
                ...state,
                tokens: newTokens,
                isLoading: false,
            }
        case actionTypes.TOKEN_ADD_FAIL:
            return{
                ...state,
                isValidated: false,
                isLoading: false
            }
        
        // Token validation [Binary.com]
        case actionTypes.TOKEN_VALIDATION_START:
            return {
                ...state,
                isValidating: true
            }
        case actionTypes.TOKEN_VALIDATION_SUCCESS:
            return {
                ...state,
                isValidated: true,
                activeToken: action.payload.token,
                userDetails: action.payload.userDetails
            }
        case actionTypes.TOKEN_VALIDATION_FAIL:
            return {
                ...state,
                isValidated: false,
                activeToken: null,
                isValidating: false
            }

        // Fetch Login History [Binary.com]
        case actionTypes.LOGIN_HISTORY_FETCH_START:
            return {
                ...state,
                history: {
                    ...state.history,
                    isLoading: true
                }
            }
        case actionTypes.LOGIN_HISTORY_FETCH_SUCCESS:
            return {
                ...state,
                history: {
                    loginHistory: action.payload,
                    isLoading: false
                }
            }
        case actionTypes.LOGIN_HISTORY_FETCH_FAIL:
            return {
                ...state,
                history: {
                    loginHistory: [],
                    error: "Login History Failed! Check again later...",
                    isLoading: false
                }
            }
        default:
            return state;
    }
    
}