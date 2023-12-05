const { createSlice } = require("@reduxjs/toolkit")

const initialValues = {
    items: [], TotalPrice: 0, TotaDiscount: 0, ToatalCount: 0, Totalpaid: 0
}

const calculateAll = (state) => {
    state.TotalPrice = 0;
    state.Totalpaid = 0;
    state.TotaDiscount = 0;
    state.items.map(item => {
        state.TotalPrice += item.price * item.count;
        state.Totalpaid += (item.priceWithDiscount !== 0 ? item.priceWithDiscount : item.price) * item.count;
        state.TotaDiscount += (item.price - (item.priceWithDiscount != 0 ? item.priceWithDiscount : 0)) * item.count;
        return state

    })


    state.ToatalCount = state.items.length;
    return state

}
export const CartSlice = createSlice({
    name: "ShoppingCart",
    initialState: initialValues,
    reducers: {
        addToShop: (state, action) => {
            state.items.push({ ...action.payload, count: 1, })

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
            state.items = state.items.filter((item) => item.id !== action.payload)


            calculateAll(state)

        },
    }
})

export const { addToShop, increase, descrease, removeItems } = CartSlice.actions
export default CartSlice.reducer