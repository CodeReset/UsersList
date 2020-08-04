import * as types from "../../../api/auth/types";

const initialState = {
  logged: false,
  selectedTab: "signIn",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNIN:
      return {
        ...state,
        logged: true,
      };
    case types.LOGOUT:
      return {
        ...state,
        logged: false,
      };
    case types.SELECTSIGNIN:
      return {
        ...state,
        selectedTab: "signIn",
      };
    case types.SELECTSIGNUP:
      return {
        ...state,
        selectedTab: "signUp",
      };
    default:
      return state;
  }
};

export default auth;
