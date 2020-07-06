import shopType from "./shopType";
import {
  firestore,
  convertShopSnapshotToMap,
} from "../../../firebase/Firebase.util";

const fetchCollectionStart = () => ({
  type: shopType.FETCH_COLLECTIONS_START,
});

const fetchCollectionSuccess = (collection) => ({
  type: shopType.FETCH_COLLECTIONS_SUCCESS,
  payload: collection,
});

const fetchCollectionError = (error) => ({
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

// export const updateCollection = (data) => {
//   return {
//     type: shopType.UPDATE_COLLECTION,
//     payload: data,
//   };
// };
