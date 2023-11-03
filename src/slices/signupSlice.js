import { createSlice } from '@reduxjs/toolkit';

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    signupRequest: state => {
      state.loading = true;
      state.success = false;
      state.error = null;
    },
    signupSuccess: state => {
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    signupFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload; // Pass error message from action payload
    },
  },
});

export const { signupRequest, signupSuccess, signupFailure } = signupSlice.actions;
export default signupSlice.reducer;
