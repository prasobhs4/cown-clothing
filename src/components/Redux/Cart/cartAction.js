import CartActionType from "./cartActiontype";
export const toggleCartHidden = () => ({
  type: CartActionType.TOGGLE_CART_HIDDEN,
});

export const additem = (item) => ({
  type: CartActionType.ADD_ITEM,
  payload: item,
});

export const remove1Item = (item) => ({
  type: CartActionType.REMOVE_ITEM,
  payload: item,
});

export const deleteitem = (item) => ({
  type: CartActionType.DELETE_ITEM,
  payload: item,
});

export const clearCart = () => ({
  type: CartActionType.CLEAR_CART,
});
