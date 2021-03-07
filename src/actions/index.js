import axios from 'axios';

export const FETCH_REQUEST_PROGRESS = 'FETCH_REQUEST_PROGRESS';
export const FETCH_REQUEST_SUCCESS = "FETCH_REQUEST_SUCCESS";
export const FETCH_REQUEST_FAILURE = "FETCH_REQUEST_FAILURE";
export const ADD_NEW_SMURF = "ADD_NEW_SMURF";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";

export const addSmurf = (smurfObj) => {
    return { type: ADD_NEW_SMURF, payload: { id: Date.now(), ...smurfObj } };
}

export const setError = (errorMessage) => {
    return { type: SET_ERROR_MESSAGE, payload: errorMessage };
}

export const fetchSmurfs = () => (dispatch) => {
    dispatch({ type: FETCH_REQUEST_PROGRESS })

    axios.get('http://localhost:3333/smurfs')
        .then((res) => {
            console.log(res.data);
            dispatch({ type: FETCH_REQUEST_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            console.log(err.message);
            dispatch({ type: FETCH_REQUEST_FAILURE, payload: err.message })
        })
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.