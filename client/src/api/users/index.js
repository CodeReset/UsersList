import axios from "axios";

import config from "../config";
import * as types from "./types";

// GETALLUSERS
const getAllUsers = () => async (dispatch) => {
  dispatch({ type: types.LOADERSTART });
  try {
    const { data } = await axios.get(config.apiUsers + "/users");
    dispatch({ type: types.GETALLUSERS, payload: data });
  } catch (e) {
    console.log(e);
  } finally {
    dispatch({ type: types.LOADERSTOP });
  }
};

// ADDUSER
const addUser = (user) => async (dispatch) => {
  try {
    console.log(user);
    // await axios.post(config.api + "/adduser", { user });
    dispatch({ type: types.ADDUSER, payload: user });
  } catch (e) {
    console.log(e);
  }
};

// REMOVEUSER
const removeUser = (id) => async (dispatch) => {
  try {
    // await axios.post(config.api + "/removeuser", { _id: id });
    dispatch({ type: types.REMOVEUSER, payload: id });
  } catch (e) {
    console.log(e);
  }
};

export { getAllUsers, addUser, removeUser };
