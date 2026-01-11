import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://rabbitbackend.onrender.com';
// axios.defaults.baseURL = 'http://localhost:3005';


const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

////////////////Feeds SET////////////////////
export const addFeed = createAsyncThunk(
  'feeds/addFeeds',
  async (feed, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    token.set(persistToken);

    try {
      const { status } = await axios.post('/feeds/add', feed);
      if (status === 201)
        Notiflix.Notify.success(
          `Корм додано у базу! ${'\n'} The feed was successfully created.`
        );
      return status;
    } catch (err) {
      Notiflix.Notify.failure(err.message);
      return err.message;
    }
  }
);

export const fetchFeeds = createAsyncThunk('feeds/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistToken = state.auth.token;

  if (persistToken === null) {
    // console.log('Токена не існує');
    return thunkAPI.rejectWithValue();
  }

  token.set(persistToken);
  try {
    const first = await axios.get('feeds');
    if (first.status === 401 ) token.unset();
    const data = [first.data];
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});


export const findCurrentFeedById = createAsyncThunk(
  'feeds/findCurrentFeedById',
  async (id, { rejectWithValue }) => {
    try {
      const { data, status } = await axios.get(`/rabbits/breeds/${id}`);
      if (status === 200) return data;
    } catch (err) {
      Notiflix.Notify.failure(err.message);
      return rejectWithValue(err.message);
    }
  }
);

export const updateFeed = createAsyncThunk(
  'feeds/updateFeed',
  async (objectsToSend, thunkAPI) => {
    console.log('object', objectsToSend[1]);
    console.log('id', objectsToSend[0]);
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    token.set(persistToken);

    try {
      const { data, status } = await axios.put(
        `/rabbits/breeds/${objectsToSend[0]}`,
        objectsToSend[1]
      );
      if (status === 200)
        Notiflix.Notify.success(
          'Корм редаговано у базі. \n The feed was successfully updated.'
        );
      return data;
    } catch (err) {
      Notiflix.Notify.failure(err.message);
      // return rejectWithValue(err.message);
    }
  }
);

export const deleteFeed = createAsyncThunk(
  'feeds/deletFeed',
  async (id, { rejectWithValue }) => {
    try {
      const { status } = await axios.delete(`feeds/delete/${id}`);
      if (status === 200)
        Notiflix.Notify.success(
          `Корм видалено з бази! \n  The feed was successfully deleted.`
        );
      return status;
    } catch (err) {
      Notiflix.Notify.failure(err.message);
      return rejectWithValue(err.message);
    }
  }
);
