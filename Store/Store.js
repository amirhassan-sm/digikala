import { combineReducers, configureStore } from "@reduxjs/toolkit"
import Cart from "./shop/CartSlice.js"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
const configuration={
    key:"cart",
    storage
}
const Rootreducer=combineReducers({
    shoppingCart:Cart
})
const persistReducers= persistReducer(configuration,Rootreducer)

 export const Store=configureStore({
    reducer:persistReducers
})
export const persisted = persistStore(Store)