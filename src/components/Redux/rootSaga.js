import { all, call } from "redux-saga/effects";

import { userSaga } from "./User/userSaga";
import { cartSagas } from "./Cart/cartSagas";
import { shopSagas } from "./Shop/shopSaga";

export function* rootSaga() {
  yield all([call(shopSagas), call(userSaga), call(cartSagas)]);
}
