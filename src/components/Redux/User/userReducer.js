import userType from "./userType";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userType.FETCH_GMAIL_AUTH_SUCCESS:
    case userType.FETCH_EMAIL_AUTH_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case userType.SIGNOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case userType.FETCH_GMAIL_AUTH_FAILURE:
    case userType.FETCH_EMAIL_AUTH_FAILURE:
    case userType.SIGNOUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
