import shopType from "./shopType";

export const updateCollection = (data) => {
  return {
    type: shopType.UPDATE_COLLECTION,
    payload: data,
  };
};
