import CartActionTypes from './cartActiontype';
import cartitem from './cartUtil';

const INITIAL_STATE = {
    hidden:true,
    cartitem:[],
};


const cartReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type)
    {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
        return {
            ...state,
            hidden:!state.hidden
            }

        case CartActionTypes.ADD_ITEM:
        return {
             ...state,
             cartitem:cartitem(state.cartitem,action.payload)
                }    

        default:
            return state
    }

}

export default cartReducer;