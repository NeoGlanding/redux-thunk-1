import axios from 'axios';

const setApiData = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            dispatch({type: 'setapi', payload: res.data})
        }).catch(err => console.log(err))
    }
}

export default setApiData;