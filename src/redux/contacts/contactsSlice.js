import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsActions = [fetchContacts, addContact, deleteContact];
const getActions = type => contactsActions.map(action => action[type]);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload
        );
        state.items.splice(index, 1);
        state.isLoading = false;
      })
      .addMatcher(
        // isAnyOf(...contactsActions.map(action => action.pending)),
        isAnyOf(...getActions('pending')),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        // isAnyOf(...contactsActions.map(action => action.rejected)),
        isAnyOf(...getActions('rejected')),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const contactReducer = () => contactsSlice.reducer;
