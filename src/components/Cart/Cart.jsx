import React from "react";
import { ReactComponent as ShoppingIcon } from "../../images/cartIcon.svg";
import "./Cart.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../Redux/Cart/cartAction";
import { selectCartItemsCount } from "../Redux/Cart/cartSelector";

const Cart = ({ toggleCartHidden, itemCount }) => {
  console.log(itemCount);
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
