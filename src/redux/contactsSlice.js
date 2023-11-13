import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operation';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

function handlePending(state) {
  state.isLoading = true;
}

function handleReject(state, action) {
  state.isLoading = false;
  state.error = action.payload
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,

  extraReducers: {
    // fetch all contacts for first render 
    [fetchContacts.pending]: handlePending,

    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },

    [fetchContacts.rejected]: handleReject,
    // add contact 
    [addContact.pending]: handlePending,

    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.items.push(action.payload);
    },

    [addContact.rejected]: handleReject,
    // delete contact 
    [deleteContact.pending]: handlePending,
    
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },

    [deleteContact.rejected]: handleReject,
  }
});

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;