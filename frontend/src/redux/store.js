import { configureStore } from "@reduxjs/toolkit";
import  usersReducer  from "./users/users.reducer"

export const store = configureStore({
  reducer: {
   users : usersReducer
  },
  
});
