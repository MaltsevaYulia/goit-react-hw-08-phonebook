import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    //add contact
    [addContact.pending](state, action) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.items.push(action.payload);
      state.error = null;
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    //delete Contact
    [deleteContact.pending](state, action) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const contactsActions = [fetchContacts, addContact, deleteContact];
const getActions = type => contactsActions.map(action => action[type]);



export const contactsSliceBuilder = createSlice({
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
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload
        );
        state.items.splice(index, 1);
      })
      // .addMatcher(
      //   isAnyOf(
      //     fetchContacts.pending,
      //     addContact.pending,
      //     deleteContact.pending
      //   ),
      //   state => {(state.isLoading = true)}
      // )
      // .addMatcher(
      //   isAnyOf(
      //     fetchContacts.rejected,
      //     addContact.rejected,
      //     deleteContact.rejected
      //   ),
      //   (state, action) => {
      //     state.isLoading = false;
      //     console.log(action);
      //     console.log(action.payload);
      //     state.error = action.payload;
      //   }
      // ),
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
