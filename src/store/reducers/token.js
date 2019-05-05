import * as actionTypes from '../actions/actionTypes';

const initialState = {
    tokens: [],
    isLoading: false,
    isValidating: false,
    isValidated: null,
    validToken: null,
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
            for(let i = action.payload.length - 1 ; i >= 0 ; i--) {
                token = {
                    id: action.payload[i].id,
                    token: action.payload[i].token,
                    created_at: action.payload[i].created_at
                }
                if(i === action.payload.length - 1){
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
            return {
                ...state,
                tokens: tokens,
                isLoading: false
            };
        case actionTypes.TOKEN_FETCH_FAIL:
            return{
                tokens: [],
                isLoading: false
            }

        case actionTypes.TOKEN_ADD_SUCCESS:
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
                validToken: action.payload.token,
                userDetails: action.payload.userDetails
            }
            case actionTypes.TOKEN_VALIDATION_FAIL:
            return {
                ...state,
                isValidated: false,
                validToken: null,
                isValidating: false
            }
        default:
            return state;
    }
    
}