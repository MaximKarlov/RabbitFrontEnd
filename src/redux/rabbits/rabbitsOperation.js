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

export const fetchRabbits = createAsyncThunk(
  'rabbits/fetchAll',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    token.set(persistToken);
    try {
      const { data, status } = await axios.get('/rabbits');
      // console.log('data>>', data);
      return { data, status };
    } catch (err) {
      Notiflix.Notify.failure(err.message);
      return err.message;
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

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    token.set(persistToken);

    try {
      const { data, status } = await axios.post('/contacts', contact);
      if (status === 201)
        Notiflix.Notify.success(
          `Контакт додано у базу! ${'\n'} The contact was successfully created.`
        );
      return data;
    } catch (err) {
      Notiflix.Notify.failure(err.message);
      return err.message;
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (id, { rejectWithValue }, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    token.set(persistToken);

    try {
      const { data, status } = await axios.patch(`/contacts/${id}`);
      if (status === 200)
        Notiflix.Notify.success(
          'Контакт редаговано у базі. \n The contact was successfully updated.'
        );
      return data;
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
      const { data, status } = await axios.delete(`/rabbits/${id}`);
      if (status === 200)
        Notiflix.Notify.success(
          `Кролика видалено з бази! \n  The rabbit was successfully deleted.`
        );
      return data;
    } catch (err) {
      Notiflix.Notify.failure(err.message);
      return rejectWithValue(err.message);
    }
  }
);
