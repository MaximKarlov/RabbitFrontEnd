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

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;

    if (persistToken === null) {
      // console.log('Токена не існує');
      return thunkAPI.rejectWithValue();
    }

    token.set(persistToken);
    try {
      const { data, status } = await axios.get('/users/current');
      if (status === 401) token.unset();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/registration',
  async (user, { rejectWithValue }) => {
    try {
      const { data,status} = await axios.post('/users/register', user);
      if (status === 201)
        Notiflix.Notify.success('Юзер успішно зареєстрований');
      token.set(data.token);
      return data;
    } catch (err) {
      Notiflix.Notify.failure('Щось пішло не так!!! Помилка: ' + err.message);
      return rejectWithValue(err.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  'users/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', user);
      token.set(data.token);
      return data;
    } catch (err) {
      if (err.response) {
        const { status, data: errorData } = err.response;

        if (status === 404 || status === 401) {
          Notiflix.Notify.failure(errorData.message || 'Невірні дані для входу');
        } else {
          Notiflix.Notify.failure(
            'Щось пішло не так!!! Помилка: ' + status
          );
        }

        return rejectWithValue(status);
      } else {
        // якщо немає response (наприклад, сервер недоступний)
        Notiflix.Notify.failure('Сервер недоступний або немає інтернету');
        return rejectWithValue('NETWORK_ERROR');
      }
  }
}
);

export const reSend = createAsyncThunk(
  'users/login/resend',
  async (email, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login/resend',{email});
      // token.set(data.token);
      return data;
    } catch (err) {
      return rejectWithValue(err.response.status);
      // return err;
    }
  }
);

export const logOutUser = createAsyncThunk('auth/logout', async () => {
  try {
    const { status } = await axios.post('/users/logout');
    if (status === 200) Notiflix.Notify.success('Ви розлогінились');
    token.unset();
  } catch (err) {
    Notiflix.Notify.failure('Щось пішло не так!!! Помилка: ' + err.message);
    return err.message;
  }
});
