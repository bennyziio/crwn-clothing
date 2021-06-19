import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case UserActionTypes.SET_CURRENT_USER:
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
<<<<<<< HEAD
    // case UserActionTypes.SIGN_OUT_SUCCESS:
    //   return {
    //     ...state,
    //     currentUser: null,
    //     error: null,
    //   };
=======
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
>>>>>>> d0d9f3339fdab383fe7164d4625d597c655941ab
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
