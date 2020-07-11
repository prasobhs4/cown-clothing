import shopType from "./shopType";
import {
  firestore,
  convertShopSnapshotToMap,
} from "../../../firebase/Firebase.util";

export const fetchCollectionStart = () => ({
  type: shopType.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = (collection) => ({
  type: shopType.FETCH_COLLECTIONS_SUCCESS,
  payload: collection,
});

export const fetchCollectionError = (error) => ({
  type: shopType.FETCH_COLLECTIONS_ERROR,
  payload: error,
});

export const updateCollections = () => async (dispatch) => {
  dispatch(fetchCollectionStart());
  const shopRef = firestore.collection("Shop");
  shopRef
    .get()
    .then((snapshot) => {
      const shopMap = convertShopSnapshotToMap(snapshot);
      dispatch(fetchCollectionSuccess(shopMap));
    })
    .catch((error) => dispatch(fetchCollectionError(error.message)));
};
