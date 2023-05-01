import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut } from './operations';

// const contactsActions = [register, logIn, logOut];
// const getActions = type => contactsActions.map(action => action[type]);

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        console.log(action.payload.user);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      }),
  //   .addMatcher(
  //     // isAnyOf(...contactsActions.map(action => action.pending)),
  //     isAnyOf(...getActions('pending')),
  //     state => {
  //       state.isLoading = true;
  //     }
  //   )
  //   .addMatcher(
  //     // isAnyOf(...contactsActions.map(action => action.rejected)),
  //     isAnyOf(...getActions('rejected')),
  //     (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     }
  //   ),
});

export const authReducer = authSlice.reducer;
