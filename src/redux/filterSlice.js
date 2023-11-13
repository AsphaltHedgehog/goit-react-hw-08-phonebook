import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setContactsFilter(state, action) {
      return action.payload;
    },
  },
},
);

export const { setContactsFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;