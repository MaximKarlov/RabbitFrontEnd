import { createSlice } from '@reduxjs/toolkit';
import {getToken} from './tuyaOperation.js';

const tuyaAuthInitialState = {
  clientId: [],
  secret: [],
  baseUrl: [],
  AccesToken: [],
  RefreshToken: [],
  isLoggedIn: false,
  error: null,
};

const tuyaSlice = createSlice({
  name: 'tuya',
  initialState: tuyaAuthInitialState,
  extraReducers: builder => {
    builder
      .addCase(getToken.pending, (state, action) => {
               state.clientId = action.meta.arg.clientId;
               state.secret = action.meta.arg.secret;
               state.baseUrl = action.meta.arg.baseUrl;
        state.isLoggedIn = true;
      })
      .addCase(getToken.fulfilled, (state, action) => {
        state.AccesToken = action.payload.data.accessToken;
        state.RefreshToken = action.payload.data.refreshToken;
        // state.isLoggedIn = true;
      })
      .addCase(getToken.rejected, (state, action) => {
        state.error = action.payload;

      });
    // .addCase(logInUser.fulfilled, (state, action) => {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLoggedIn = true;
    // })

    // .addCase(logOutUser.fulfilled, (state, _) => {
    //   state.user = { name: null, email: null };
    //   state.token = null;
    //   state.isLoggedIn = false;
    // })
    // .addCase(fetchCurrentUser.fulfilled, (state, action) => {
    //   state.user = { ...action.payload };
    //   state.isLoggedIn = true;
    // })
    // .addCase(fetchCurrentUser.rejected, (state, _) => {
    //   state.user = { name: null, email: null };
    //   state.token = null;
    //   state.isLoggedIn = false;
    // });
  },
});

export const tuyaAuthReducer = tuyaSlice.reducer;
