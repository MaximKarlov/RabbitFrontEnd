import { createSlice } from '@reduxjs/toolkit';
import {
  // fetchRabbits,
  // fetchRabbitsBreed,
  // addRabbit,
  // deleteRabbit,
  // addFeed,
  fetchFeeds,
  // deleteRabbitBreed,
} from './feedOperation';

const feedsInitialState = {
  feeds: [],
  isLoading: false,
  error: null,
};

const feedsSlice = createSlice({
  name: 'feeds',
  initialState: feedsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchFeeds.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchFeeds.fulfilled, (state, action) => {
        state.feeds = action.payload[0];
        state.isLoading = false;
      });
      // .addCase(fetchRabbitsBreed.fulfilled, (state, action) => {
      //   state.breed = action.payload;
      //   state.isLoading = false;
      // })
      // .addCase(fetchRabbitsBreed.pending, (state, _) => {
      //   state.isLoading = true;
      // })
      // .addCase(fetchRabbitsBreed.rejected, (state, action) => {
      //   state.error = true;
      // })
      // .addCase(fetchRabbits.fulfilled, (state, action) => {
      //   state.rabbits = action.payload;
      //   state.isLoading = false;
      // })
      // .addCase(fetchRabbits.pending, (state, _) => {
      //   state.isLoading = true;
      // })
      // .addCase(fetchRabbits.rejected, (state, action) => {
      //   state.error = true;
      // })
      // .addCase(addRabbit.fulfilled, (state, action) => {
      //   state.isLoading = false;
      // })
      // .addCase(addRabbit.pending, (state, action) => {
      //   state.isLoading = true;
      // })
      // .addCase(deleteRabbit.fulfilled, (state, action) => {
      //   state.isLoading = false;
      // })
      // .addCase(deleteRabbit.pending, (state, action) => {
      //   state.isLoading = true;
      // })
      // .addCase(deleteRabbitBreed.fulfilled, (state, action) => {
      //   state.isLoading = false;
      // })
      // .addCase(deleteRabbitBreed.pending, (state, action) => {
      //   state.isLoading = true;
      // });

    // .addMatcher();
  },
});

export const FeedReducer = feedsSlice.reducer;
