import React from 'react'
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk'

const initialState = {
    counter: 0,
    apiData: null
}

const reducer = (state = initialState, action) => {
    if (action.type === "increment") {
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if (action.type === 'setapi') {
        return {
            ...state,
            apiData: action.payload
        }
    }

    return state;
}

const store = createStore(reducer, applyMiddleware(thunk));
export default store;