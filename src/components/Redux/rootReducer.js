import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import shopReducer from '../Redux/Shop/shopReducer'
import sectionReducer from '../Redux/Section/sectionReducer';


import userReducer from '../Redux/User/userReducer';
import cartReducer from '../Redux/Cart/cartReducer';

const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart']
}

const rootReducer = combineReducers({
    user:userReducer,
    cart:cartReducer,
    shop:shopReducer,
    sections:sectionReducer,
})


export default persistReducer(persistConfig,rootReducer)

