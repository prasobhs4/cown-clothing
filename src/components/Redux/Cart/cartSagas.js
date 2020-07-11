import { clearCart } from "../Cart/cartAction";
import userType from "../User/userType";
import { all, call, put, takeLatest } from "redux-saga/effects";

export function* clearCartSuccess() {
  yield console.log("clear cart success");
  yield put(clearCart());
}

export function* clearCartStart() {
  yield takeLatest(userType.SIGNOUT_SUCCESS, clearCartSuccess);
}

export function* cartSagas() {
  yield all([call(clearCartStart)]);
}
