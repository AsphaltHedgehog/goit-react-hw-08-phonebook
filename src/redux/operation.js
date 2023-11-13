import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://connections-api.herokuapp.com";


export const fetchContacts = createAsyncThunk('contact/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
});


export const addContact = createAsyncThunk('contact/addContact', async ({name, number}, thunkAPI) => {
  try {
    const response = await axios.post('/contacts', {name, number});
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
});


export const deleteContact = createAsyncThunk('contact/deleteContact', async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})