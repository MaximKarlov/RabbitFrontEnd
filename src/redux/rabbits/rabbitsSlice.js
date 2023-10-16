import { createSlice } from '@reduxjs/toolkit';
import { fetchRabbits, addContact, deleteContact } from './rabbitsOperation';

const rabbitsInitialState = {
  rabbits: [],
  isLoading: false,
  error: null,
};

const rabbitsSlice = createSlice({
  name: 'rabbits',
  initialState: rabbitsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchRabbits.fulfilled, (state, action) => {
        state.rabbits = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchRabbits.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(fetchRabbits.rejected, (state, action) => {
        state.error = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
        state.isLoading = false;
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.isLoading = true;
      });

    // .addMatcher();
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
export const RabbitsReducer = rabbitsSlice.reducer;
