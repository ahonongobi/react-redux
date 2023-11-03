import { SIGNUP_FAILURE, SIGNUP_SUCCESS } from "../store/actionTypes";

const initialState = {
  loading: false,
  success: false,
  error: null,
};

const singupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
      };

    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default singupReducer;
