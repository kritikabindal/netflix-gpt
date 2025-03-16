// This file contains the userSlice which is a slice of the Redux store that contains the user information.
// It has two actions: addUser and removeUser. The addUser action sets the user information in the store
// and the removeUser action removes the user information from the store.
// The userSlice is created using the createSlice function from the Redux Toolkit.
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer; // Default export for userReducer
