import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice, contactsSliceBuilder } from './contactsSlice';
import { filterSlice } from './filterSlice';
export const store = configureStore({
  reducer: {
    // contacts: contactsSlice.reducer,
    contacts: contactsSliceBuilder.reducer,
    filter: filterSlice.reducer,
  },
});



