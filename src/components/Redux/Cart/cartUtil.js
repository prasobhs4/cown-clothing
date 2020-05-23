export const cartitem = (cartItem,cartItemToAdd) => {
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


export const remove = (cartItem,cartItemToRemove) => {
    const cartExist = cartItem.find(cur => cur.id === cartItemToRemove.id)
   
    if(cartItemToRemove.quantity <= 1){
        return cartItem.filter(cur => cur.id !== cartItemToRemove.id)
    }
    if(cartExist){
        return cartItem.map(cur => 
     
            cur.id === cartItemToRemove.id ?
            {...cur,quantity:cur.quantity-1}
            : cur
        )
    }
    
  
  
}

