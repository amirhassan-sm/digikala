"use client"
import Cart from "../shop/ShoppingCartSlice.js"
const { configureStore } = require("@reduxjs/toolkit");

 export const Store=configureStore({
    reducer:{shoppingCart: Cart}
})