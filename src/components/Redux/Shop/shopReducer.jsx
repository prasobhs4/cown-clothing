import SHOP_DATA from "../../../Json/SHOP_DATA";
import shopType from "./shopType";

const INITIAL_STATE = {
  collections: null,
  isCollectionsLoading: false,
  error: "",
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopType.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isCollectionsLoading: true,
      };
    case shopType.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isCollectionsLoading: false,
        collections: action.payload,
      };
    case shopType.FETCH_COLLECTIONS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case shopType.UPDATE_COLLECTION:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
