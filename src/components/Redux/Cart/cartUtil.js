const cartUtil = (cartItem,cartItemToAdd) => {
    const cartExist = cartItem.find(cur => cur.id === cartItemToAdd.id)

    if(cartExist){
        return cartItem.map(cur => 
     
            cur.id === cartItemToAdd.id ?
            {...cur,quantity:cur.quantity+1}
            : cur
        )
    }
    
    return [...cartItem,{...cartItemToAdd,quantity:1}]
}

export default cartUtil;