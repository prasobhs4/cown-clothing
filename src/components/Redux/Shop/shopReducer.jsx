import SHOP_DATA from '../../../Json/SHOP_DATA';

const shopReducer = (state=SHOP_DATA,action) => {
 switch (action.type){
     default:
         return state
 } 

}


export default shopReducer;