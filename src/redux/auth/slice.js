import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logOutUser } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      login: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(registerUser.pending, state => state)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user.login = action.payload.user.login;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registerUser.rejected, state => state)
      .addCase(loginUser.pending, state => state)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user.login = action.payload.user.login;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, state => state)
      .addCase(logOutUser.pending, state => state)
      .addCase(logOutUser.fulfilled, (state, action) => {
        state.user.login = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOutUser.rejected, state => state),
});

export const authReducer = authSlice.reducer;
