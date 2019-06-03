import * as actionTypes from './actionTypes';

// Create message
export const createMessage = (msg) => {
    return {
        type: actionTypes.CREATE_MESSAGE,
        payload: msg
    }
}
