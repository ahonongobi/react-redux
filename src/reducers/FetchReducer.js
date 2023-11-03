import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "../store/actionTypes";

const initialState = {
  loading: false,
  users: [],
  error: null,
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: null,
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default fetchReducer;



