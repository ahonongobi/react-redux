import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../store/actionTypes";

const initialState = {
  loading: false,
  isAuth: false,
  success: false,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        success: true,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        isAuth: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default loginReducer;
