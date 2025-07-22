import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addtocart: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addtocart } = ProductSlice.actions

export default ProductSlice.reducer