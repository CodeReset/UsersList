import axios from "axios";

import config from "../config";
import * as types from "./types";

import { setToken } from "../auth.storege";
import { history } from "../..";

// AUTH_LOGIN
const authSignIn = (name, password) => async (dispatch) => {
  try {
    const res = await axios.post(config.api + "/signin", { name, password });
    const result = await res.data;
    if (res.status === 200 && result.token) {
      dispatch({ type: types.SIGNIN });
      setToken(result.token);
      history.push("/");
    }
  } catch (e) {
    console.log(e);
  }
};

// AUTH_REGISTRATE
const authSignUp = (name, password, phone) => async (dispatch) => {
  try {
    const res = await axios.post(config.api + "/signup", {
      name,
      phone,
      password,
    });
    if (res.status === 200) {
      dispatch({ type: types.SELECTSIGNIN });
    }
  } catch (e) {
    console.log(e);
  }
};

// AUTH_LOGOUT
// const authLogout = () => async (dispatch) => {
//   try {
//     await axios.post(
//       config.api + "/registrate",
//       {},
//       {
//         headers: {
//           Authorization: "Bearer " + getToken(),
//         },
//       }
//     );
//     dispatch({ type: types.LOGOUT });
//     history.push("auth");
//   } catch (e) {
//     console.log(e);
//   }
// };

export { authSignIn, authSignUp };
