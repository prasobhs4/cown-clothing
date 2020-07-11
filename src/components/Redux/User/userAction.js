import userType from "./userType";

export const fetchGmailStart = () => ({
  type: userType.FETCH_GMAIL_AUTH_START,
});
export const fetchGmailSuccess = (user) => ({
  type: userType.FETCH_GMAIL_AUTH_SUCCESS,
  payload: user,
});
export const fetchGmailError = (error) => ({
  type: userType.FETCH_GMAIL_AUTH_FAILURE,
  payload: error,
});
export const fetchEmailStart = (userandPassword) => ({
  type: userType.FETCH_EMAIL_AUTH_START,
  payload: userandPassword,
});
export const fetchEmailSuccess = (user) => ({
  type: userType.FETCH_EMAIL_AUTH_SUCCESS,
  payload: user,
});
export const fetchEmailError = (error) => ({
  type: userType.FETCH_EMAIL_AUTH_FAILURE,
  payload: error,
});

export const setCurrentUser = () => ({
  type: "SET_CURRENT_USER",
});

export const signOutStart = () => ({
  type: userType.SIGNOUT_START,
});
export const signOutSuccess = () => ({
  type: userType.SIGNOUT_SUCCESS,
});
export const signOutFailure = (error) => ({
  type: userType.SIGNOUT_FAILURE,
  payload: error,
});

export const signUpStart = (userCredentials) => ({
  type: userType.SIGNUP_START,
  payload: userCredentials,
});
export const signUpSuccess = () => ({
  type: userType.SIGNUP_SUCCESS,
});
export const signUpFailure = (error) => ({
  type: userType.SIGNUP_FAILURE,
  payload: error,
});
