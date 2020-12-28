import { configureStore } from "@reduxjs/toolkit";
import  usersReducer  from "./users/users.reducer"

export const store = configureStore({
  reducer: {
    usersList: usersReducer.usersList,
    currentUser: usersReducer.currentUser,
    loading: usersReducer.loading
  },
  
});
