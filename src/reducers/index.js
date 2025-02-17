import counterReducer from "./counter";
import loggedReducer from "./isLoggedIn";
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    counter:counterReducer,
    isLoggedIn:loggedReducer
})
export default allReducer;