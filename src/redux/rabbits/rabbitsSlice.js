import { createSlice } from '@reduxjs/toolkit';
import {
  fetchRabbits,
  fetchRabbitsBreed,
  addRabbit,
  deleteRabbit,
  fetchCurrentRabbits,
  deleteRabbitBreed,
} from './rabbitsOperation';

const rabbitsInitialState = {
  rabbits: [],
  breed: [],
  isLoading: false,
  error: null,
};

const rabbitsSlice = createSlice({
  name: 'rabbits',
  initialState: rabbitsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCurrentRabbits.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCurrentRabbits.fulfilled, (state, action) => {
        state.rabbits = action.payload[0];
        state.breed = action.payload[1];
        state.isLoading = false;
      })
      .addCase(fetchRabbitsBreed.fulfilled, (state, action) => {
        state.breed = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchRabbitsBreed.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(fetchRabbitsBreed.rejected, (state, action) => {
        state.error = true;
      })
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
      .addCase(addRabbit.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addRabbit.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteRabbit.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteRabbit.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteRabbitBreed.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteRabbitBreed.pending, (state, action) => {
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
