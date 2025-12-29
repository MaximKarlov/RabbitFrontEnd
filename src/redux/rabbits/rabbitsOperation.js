import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://rabbitbackend.onrender.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

/////////////////////RABBITS///////////////////////
export const addRabbit = createAsyncThunk(
  'rabbit/addRabbit',
  async (rabbit, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    token.set(persistToken);

    try {
      const { status } = await axios.post('/rabbits/add', rabbit);
      if (status === 201)
        Notiflix.Notify.success(
          `Кролика додано у базу! ${'\n'} The rabbit was successfully created.`
        );
      return status;
    } catch (err) {
      Notiflix.Notify.failure(err.message);
      return err.message;
    }
  }
);

export const fetchRabbits = createAsyncThunk(
  'rabbits/fetchAll',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    token.set(persistToken);
    try {
      const { data, status } = await axios.get('/rabbits');
      if (status === 200 && data.length > 0) return data;
    } catch (err) {
      Notiflix.Notify.failure(err.message);
      return err.message;
    }
  }
);

export const fetchCurrentRabbits = createAsyncThunk(
  'rabbits/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;

    if (persistToken === null) {
      // console.log('Токена не існує');
      return thunkAPI.rejectWithValue();
    }

    token.set(persistToken);
    try {
      const first = await axios.get('/rabbits');
      const second = await axios.get('/rabbits/breeds');
      if (first.status === 401 || second.status === 401) token.unset();
      const data = [first.data, second.data];
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const fetchRabbitsBreed = createAsyncThunk(
  'rabbits/fetchBreedAll',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    token.set(persistToken);
    try {
      const { data } = await axios.get('/rabbits/breeds');
      return data;
    } catch (err) {
      if (err.response.status === 404) {
        Notiflix.Notify.failure(err.message);
        return err.message;
      }
    }
  }
);

export const updateContact = createAsyncThunk(
  'rabbit/updateRabbit',
  async (id, { rejectWithValue }, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    token.set(persistToken);

    try {
      const { data, status } = await axios.patch(`rabbits/${id}`);
      if (status === 200)
        Notiflix.Notify.success(
          'Кролика редаговано у базі. \n The rabbit was successfully updated.'
        );
      return data;
    } catch (err) {
      Notiflix.Notify.failure(err.message);
      return rejectWithValue(err.message);
    }
  }
);

export const findRabbitById = createAsyncThunk(
  'rabbit/findById',
  async (id, { rejectWithValue }) => {
    try {
      const { data, status } = await axios.get(`/rabbits/${id}`);
      if (status === 200) return console.log(data);
    } catch (err) {
      Notiflix.Notify.failure(err.message);
      return rejectWithValue(err.message);
    }
  }
);

export const deleteRabbit = createAsyncThunk(
  'rabbit/deleteRabbit',
  async (id, { rejectWithValue }) => {
    try {
      const { status } = await axios.delete(`/rabbits/${id}`);
      if (status === 200)
        Notiflix.Notify.success(
          `Кролика видалено з бази! \n  The rabbit was successfully deleted.`
        );
      return status;
    } catch (err) {
      Notiflix.Notify.failure(err.message);
      return rejectWithValue(err.message);
    }
  }
);

////////////////BREED SET////////////////////
export const addRabbitBreed = createAsyncThunk(
  'rabbit/addRabbitBreed',
  async (breed, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    token.set(persistToken);

    try {
      const { status } = await axios.post('rabbits/breeds/add', breed);
      if (status === 201)
        Notiflix.Notify.success(
          `Породу додано у базу! ${'\n'} The Breed was successfully created.`
        );
      return status;
    } catch (err) {
      Notiflix.Notify.failure(err.message);
      return err.message;
    }
  }
);

export const findCurrentBreedById = createAsyncThunk(
  'rabbit/findCurrentBreedById',
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

export const updateRabbitsBreed = createAsyncThunk(
  'rabbit/updateBreed',
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
          'Породу редаговано у базі. \n The rabbit breed was successfully updated.'
        );
      return data;
    } catch (err) {
      Notiflix.Notify.failure(err.message);
      // return rejectWithValue(err.message);
    }
  }
);

export const deleteRabbitBreed = createAsyncThunk(
  'rabbit/deleteRabbitBreed',
  async (id, { rejectWithValue }) => {
    try {
      const { status } = await axios.delete(`/rabbits/breeds/${id}`);
      if (status === 200)
        Notiflix.Notify.success(
          `Породу видалено з бази! \n  The breed was successfully deleted.`
        );
      return status;
    } catch (err) {
      Notiflix.Notify.failure(err.message);
      return rejectWithValue(err.message);
    }
  }
);
