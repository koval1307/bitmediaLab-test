import axios from "axios";
import actions from "./users.actions";

const getAllUsers = (page) => async (dispatch) => {
  dispatch(actions.getAllUsersRequest());
  try {
      const response = await axios.get(
        `http://localhost:5000/users/?page=${page}`
      );
    dispatch(actions.getAllUsersSuccess(response.data));
  } catch (error) {
    dispatch(actions.getAllUsersError(error));
  }
};

const getUser = (id) => async (dispatch) => {
  dispatch(actions.getUserByIdRequest());
  try {
    const response = await axios.get(
      `http://localhost:5000/users/${id}`
    );
      console.log(response.data)
    dispatch(actions.getUserByIdSuccess(response.data));
  } catch (error) {
    dispatch(actions.getAllUsersError(error));
  }
};

export default {
    getAllUsers,
    getUser
};