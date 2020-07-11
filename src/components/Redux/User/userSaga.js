import userType from "./userType";
import { takeLatest, put, call, all } from "redux-saga/effects";
import {
  googleProvider,
  auth,
  createUserProfileDocument,
  getUserAuthChange,
} from "../../../firebase/Firebase.util";
import {
  fetchGmailSuccess,
  fetchGmailError,
  fetchEmailSuccess,
  fetchEmailError,
  signOutFailure,
  signOutStart,
  signOutSuccess,
} from "./userAction";
export function* fetchCurrentUser() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      fetchGmailSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(fetchGmailError(error));
  }
}

export function* fetchCurrentUserStart() {
  yield takeLatest(userType.FETCH_GMAIL_AUTH_START, fetchCurrentUser);
}

export function* fetchCurrentEmailForUser({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      fetchEmailSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(fetchEmailError(error.message));
  }
}

export function* fetchCurrentUserDetails() {
  try {
    const userAuth = yield getUserAuthChange();
    console.log(userAuth);
    if (!userAuth) return;
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(
      fetchEmailSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(fetchEmailError(error.message));
  }
}

export function* fetchCurrentEmailForUserStart() {
  yield takeLatest(userType.FETCH_EMAIL_AUTH_START, fetchCurrentEmailForUser);
}

export function* fetchUserDetails() {
  yield takeLatest(userType.SET_CURRENT_USER, fetchCurrentUserDetails);
}

export function* onSignoutBegin() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(call(signOutFailure, error));
  }
}

export function* onSignoutStart() {
  yield takeLatest(userType.SIGNOUT_START, onSignoutBegin);
}

export function* signUpUser({ payload: { email, password, displayName } }) {
  try {
    yield console.log(email, password, displayName);
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield console.log(user);
    const userRef = yield call(createUserProfileDocument, user, displayName);
    const userSnapshot = yield userRef.get();
    yield put(
      fetchEmailSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(fetchEmailError(error.message));
  }
  // try {
  //   const userAuth = yield getUserAuthChange();
  //   console.log(userAuth);
  //   if (!userAuth) return;
  //   const userRef = yield call(createUserProfileDocument, userAuth);
  //   const userSnapshot = yield userRef.get();
  //   yield put(
  //     fetchEmailSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
  //   );
  // } catch (error) {
  //   yield put(fetchEmailError(error.message));
  // }
}

export function* signUpStart() {
  yield takeLatest(userType.SIGNUP_START, signUpUser);
}

export function* userSaga() {
  yield all([
    call(fetchCurrentUserStart),
    call(fetchCurrentEmailForUserStart),
    call(fetchUserDetails),
    call(onSignoutStart),
    call(signUpStart),
  ]);
}
