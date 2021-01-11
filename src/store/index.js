import {createStore,combineReducers} from 'redux'
import userReducer from './Reducers/userReducer'

const store = createStore(combineReducers({
    userReducer,
}))

export default store