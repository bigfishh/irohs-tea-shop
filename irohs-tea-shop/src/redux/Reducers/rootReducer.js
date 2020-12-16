import { combineReducers } from 'redux'
import teaReducer from './teaReducer'
import userReducer from './userReducer'

// combineReducers takes in a POJO
    // the keys of the POJO become the highest level keys of global state
    // the values of the POJO are the reducers 

// any time that an action gets dispatched, all the reducers handle it

const rootReducer = combineReducers({
    teaInfo: teaReducer,
    userInfo: userReducer
})

export default rootReducer;