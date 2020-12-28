import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./users.actions";

const usersState = [];


const usersList = createReducer([], {
  [actions.getAllUsersSuccess]: (_, { payload }) => payload,
  [actions.getUserByIdSuccess]: (_, { payload }) => payload,
});
const currentUser = createReducer([], {
  [actions.getUserByIdSuccess]: (_, { payload }) => payload,
});
const loading = createReducer(false, {
  [actions.getAllUsersRequest]: () => true,
  [actions.getAllUsersSuccess]: () => false,
  [actions.getAllUsersError]: () => false,
  [actions.getUserByIdRequest]: () => true,
  [actions.getUserByIdSuccess]: () => false,
  [actions.getUserByIdError]: () => false,
});

export default { loading, usersList, currentUser }