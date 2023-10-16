import { createSlice } from '@reduxjs/toolkit';
import { registerUser, logInUser, logOutUser, fetchCurrentUser } from './authOperation';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOutUser.fulfilled, (state, _) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = { ...action.payload };
        state.isLoggedIn = true;
      })
      .addCase(fetchCurrentUser.rejected, (state, _) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});

// const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
// // Виконається в момент старту HTTP-запиту
// fetchingInProgress(state) {
//   state.isLoading = true;
// },
//     // Виконається якщо HTTP-запит завершився успішно
//     fetchingSuccess(state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     // Виконається якщо HTTP-запит завершився з помилкою
//     fetchingError(state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });
//
// export const { fetchingInProgress, fetchingSuccess, fetchingError } = authSlice.actions;
export const authReducer = authSlice.reducer;
