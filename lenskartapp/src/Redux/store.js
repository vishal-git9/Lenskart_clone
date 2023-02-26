import {legacy_createStore,combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { authReducer } from "./Authentication/auth.reudcer"
import { productReducer } from "./Products/products.reducer"
import { wishListReducer } from "./Whislist/whis.reducer"
const reducer = combineReducers({
    productState:productReducer,
    authState:authReducer,
    wishListReducer
})
export const store = legacy_createStore(reducer,applyMiddleware(thunk))