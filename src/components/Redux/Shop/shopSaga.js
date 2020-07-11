import { takeEvery, takeLatest, call, put, all } from "redux-saga/effects";
import {
  firestore,
  convertShopSnapshotToMap,
} from "../../../firebase/Firebase.util";

import {
  fetchCollectionSuccess,
  fetchCollectionError,
  fetchCollectionStart,
} from "./shopAction";

import shopTypes from "./shopType";

export function* shopCollectionsAsync() {
  try {
    const shopRef = firestore.collection("Shop");
    const snapShot = yield shopRef.get();
    const collectionsMap = yield call(convertShopSnapshotToMap, snapShot);
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionError(error));
  }
}

export function* shopCollections() {
  yield takeLatest(shopTypes.FETCH_COLLECTIONS_START, shopCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(shopCollections)]);
}
