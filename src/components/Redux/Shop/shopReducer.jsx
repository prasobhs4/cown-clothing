import SHOP_DATA from "../../../Json/SHOP_DATA";
import shopType from "./shopType";

const INITIAL_STATE = {
  collections: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
