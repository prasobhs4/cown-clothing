import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartitem
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartitem) => cartitem.reduce((acc, cur) => acc + cur.quantity, 0)
);
