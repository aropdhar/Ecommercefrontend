import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    getTotalItem: (state, action) => {
      state.cart = action.payload.data.cart;
      localStorage.setItem('cartItem' , JSON.stringify(action.payload.data.cart));
    },
  },
})

// Action creators are generated for each case reducer function
export const { getTotalItem } = cartSlice.actions

export default cartSlice.reducer