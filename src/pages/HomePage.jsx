import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios';
import setApiData from './../store/action'

const HomePage = props => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setApiData())
    }, [])

    return (
        <div>
            <h1>Counter - {state.counter}</h1>
            <button onClick={() => dispatch({type: 'increment'})}>Add</button>
            <button onClick={() => console.log(state.apiData)}>Check API</button>
        </div>
    )
}

export default HomePage;