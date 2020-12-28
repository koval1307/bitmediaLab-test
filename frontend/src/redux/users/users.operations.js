import axios from "axios";
import actions from "./users.actions";

const getAllUsers = (page) => async (dispatch) => {
  dispatch(actions.getAllUsersRequest());
  try {
      const response = await axios.get(
        `https://protected-headland-04548.herokuapp.com/users/?page=${page}`
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
      `https://protected-headland-04548.herokuapp.com/users/${id}`
    );

    dispatch(actions.getUserByIdSuccess(response.data));
  } catch (error) {
    dispatch(actions.getAllUsersError(error));
  }
};

export default {
    getAllUsers,
    getUser
};