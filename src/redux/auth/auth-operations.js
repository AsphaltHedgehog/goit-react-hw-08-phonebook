import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const currentToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``
  }
}

const register = createAsyncThunk('auth/register', async (credential, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/signup', credential);
    currentToken.set(data.token)
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
});


const logIn = createAsyncThunk('auth/login', async (credential, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credential);
    currentToken.set(data.token)
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})


const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/logout');
    currentToken.unset()
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})



const currentAuth = createAsyncThunk('auth/current', async (token, thunkAPI) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    const { data } = await axios.get('/users/current', null, config);
    currentToken.set(token)
    return data;
  } catch (error) {
    currentToken.unset()
    return thunkAPI.rejectWithValue(error.message)
  }
})



const authOperations = { register, logIn, logOut, currentAuth };

export default authOperations;