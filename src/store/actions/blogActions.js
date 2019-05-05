import axios from "axios";

import * as actionTypes from './actionTypes';
import { createMessage } from './messageActions';

// GET blogs
export const getBlogs = () => dispatch=> {
    axios.get('https://foxbin-api.herokuapp.com/api/tickhistory')
        .then((res) => {
            dispatch({
                type: actionTypes.GET_BLOGS,
                payload: res.data
            });
            dispatch(createMessage("Your blogs loaded!"));
        })
        .catch((err) => {
            console.log(err);
            if (err.response) {
                const errors = {
                    msg: err.response.data,
                    status: err.response.status
                }
                dispatch({
                    type: actionTypes.SHOW_ERROR,
                    payload: errors
                });
            } else {
                    const errors = {
                        msg: err,
                        status: 404
                    }
                    dispatch({
                        type: actionTypes.SHOW_ERROR,
                        payload: errors
                    });
            }
        });
}