import CartActionType from './cartActiontype'
export const toggleCartHidden = ()=> ({
    type:CartActionType.TOGGLE_CART_HIDDEN,
})

export const additem = item => ({
    type:CartActionType.ADD_ITEM,
    payload:item,
})