import {combineReducers} from 'redux';


import userReducer from '../Redux/User/userReducer';

export default combineReducers({
    user:userReducer
})


