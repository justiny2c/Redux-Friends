import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,  } from "../actions";


const initialState = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
}


export const friendsReducer = (state = initialState , action) => {
    switch (action.type) {
        case LOGIN_START: 
        return {
            ...state,
            error: "",
            loggingIn: true
        };
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: "",
                loggingIn: false
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                loggingIn: false
            }
        case FETCH_START: {
            return {
                ...state,
                error: "",
                fetchingFriends: true
            }
        }
        case FETCH_SUCCESS: {
            return {
                ...state,
                error: "",
                fetchingFriends: false,
                friends: action.payload
            }
        }
        case FETCH_FAILURE: {
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload
            }
        }
        default:
            return state;
    }
}