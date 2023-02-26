import {legacy_createStore,combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { authReducer } from "./Authentication/auth.reudcer"
import { cartReducer } from "./Cart/cart.reducer"
import { productReducer } from "./Products/products.reducer"
const reducer = combineReducers({
    productState:productReducer,
    authState:authReducer,
    cartState:cartReducer
})
export const store = legacy_createStore(reducer,applyMiddleware(thunk))