import * as actionTypes from '../actions/actionTypes';

const initialState = {
    tokens: [],
    isLoading: false,
    isLoaded: false
}

export default function (state=initialState, action) {
    switch (action.type) {
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
                isLoading: false,
                isLoaded: true
            };
        case actionTypes.TOKEN_FETCH_FAIL:
            return{
                tokens: [],
                isLoading: false
            }
        default:
            return state;
    }
    
}