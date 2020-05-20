import {combineReducers} from 'redux';


import userReducer from '../Redux/User/userReducer';
import cartReducer from '../Redux/Cart/cartReducer';

export default combineReducers({
    user:userReducer,
    cart:cartReducer,
})


