import * as actionTypes from '../actions/actionTypes';

const initialState = {
    posts: []
}

export default function(state=initialState, action){
    switch (action.type) {
        case actionTypes.GET_BLOGS:
            return {
                ...state,
                posts: [...state, action.payload]
            }    
        default:
            return state;
    }
}