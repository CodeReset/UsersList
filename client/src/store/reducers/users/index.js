import * as types from "../../../api/users/types";
const initialState = {
  allUsers: [],
  loader: false,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case types.GETALLUSERS:
      return {
        ...state,
        allUsers: action.payload,
      };

    case types.ADDUSER:
      return {
        ...state,
        allUsers: [action.payload, ...state.allUsers],
      };

    case types.REMOVEUSER:
      return {
        ...state,
        allUsers: state.allUsers.filter((user) => user.id !== action.payload),
      };

    case types.LOADERSTART:
      return {
        ...state,
        loader: true,
      };
    case types.LOADERSTOP:
      return {
        ...state,
        loader: false,
      };

    default:
      return state;
  }
};

export default users;
