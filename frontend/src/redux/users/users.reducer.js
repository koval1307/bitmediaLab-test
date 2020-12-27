import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./users.actions";

const usersState = [];


const usersReducer = createReducer([], {
  [actions.getAllUsersSuccess]: (_, { payload }) => payload,
  [actions.getUserByIdSuccess]: (_, { payload }) => payload,
});

export default usersReducer