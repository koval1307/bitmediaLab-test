import { createAction } from "@reduxjs/toolkit";


const getAllUsersRequest = createAction("users/getAllURequest");
const getAllUsersSuccess = createAction("users/getAllUsersSuccess");
const getAllUsersError = createAction("users/getAllUsersError");

const getUserByIdRequest = createAction("user/getUserByIdRequest");
const getUserByIdSuccess = createAction("user/getUserByIdSuccess");
const getUserByIdError = createAction("user/getUserByIdError");

export default {
 
  getAllUsersRequest,
  getAllUsersSuccess,
  getAllUsersError,
  getUserByIdError,
  getUserByIdRequest,
  getUserByIdSuccess
};


