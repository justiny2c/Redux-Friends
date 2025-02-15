import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth"

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loggingIn = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return (
        axios.post(`http://localhost:5000/api/login`, creds)
            .then(res => {
                localStorage.setItem("token", res.data.payload);
                dispatch({ type: LOGIN_SUCCESS});
                return true;
            })
            .catch(err => {
                console.log(err)
                dispatch ({ type: LOGIN_FAILURE, payload: err});
                return err.response
            })
    )
}


export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const getData = () => dispatch => {
    dispatch({ type: FETCH_START });
    axiosWithAuth()
        .get(`http://localhost:5000/api/friends`)
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FETCH_FAILURE, payload: err})
        })
}