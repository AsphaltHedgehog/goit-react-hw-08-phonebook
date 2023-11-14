import { createSlice } from "@reduxjs/toolkit/dist";

import authOperations from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.register.rejected](_, action) {
      console.log(action);
      if (action.error.message === 'Rejected') {
        alert('this mail already register')
      }
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = false;
    },
    [authOperations.currentAuth.fulfilled](state, action) {
      state.user = {...action.payload};
      state.isLoggedIn = true;
    }
  }
})


export const authReducer = authSlice.reducer