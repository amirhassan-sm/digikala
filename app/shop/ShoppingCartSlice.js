"use client"
const { createSlice } = require("@reduxjs/toolkit")

const initialValues = {
    items: [], TotalPrice: 0, TotaDiscount: 0, count: 0,
}

const calculateAll = (state) => {
    state.TotalPrice += state.items.map(item => { return (item.priceWithDiscount != 0 ? item.priceWithDiscount : price) });
    state.TotaDiscount += state.items.map(item => { return (item.priceWithDiscount != 0 ? item.priceWithDiscount : null) });
    state.count = state.items.length;
    return state
}
 export const CartSlice = createSlice({
    name: "ShoppingCart",
    initialState: initialValues,
    reducers: {
        addToShop: (state, action) => {
            state.items.push(action.payload)

            calculateAll(state)

        },
        increase: (state, action) => {
            state.items.map(item => {
                if (item.id == action.payload) { item.count++ }
                return item
            })

            calculateAll(state)

        },
        descrease: (state, action) => {
            state.items.map(item => {
                if (item.id == action.payload) { item.count-- }
                return item
            })
            calculateAll(state)

        },
        removeItems: (state, action) => {
            state.items.filter(item.id != action.payload)

            calculateAll(state)

        },
    }
})

export const {addToShop,increase,descrease,removeItems}=CartSlice.actions
export default CartSlice.reducer