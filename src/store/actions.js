import {INCREMENT,DECREMENT} from "./actionTypes"
import axios from 'axios'

export const increment = ()=>{
  return {
    type: INCREMENT
  }

}

export const decrement = ()=> {
  return {
    type: DECREMENT
  }
}

export const signup = (userData) => {
  
  return async (dispatch) => {
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/users", userData);
      console.log(response);

      dispatch({type:'SIGNUP_SUCCESS', payload: response.data})
    } catch (error) {
      dispatch({type: 'SIGNUP_FAILURE', payload: error.message})
    }
  }
}

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(response);

      dispatch({type:'FETCH_USERS_SUCCESS', payload: response.data})
    } catch (error) {
      dispatch({type: 'FETCH_USERS_FAILURE', payload: error.message})
    }
  }
}