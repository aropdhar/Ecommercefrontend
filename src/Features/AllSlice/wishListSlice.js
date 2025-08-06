import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem("wishlistItem") ? JSON.parse(localStorage.getItem("wishlistItem")) || [] : null,
}

export const wishListSlice = createSlice({
  name: 'wishListSlice',
  initialState,
  reducers: {
    wishlistadd: (state, action) => { 
       state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { wishlistadd } = wishListSlice.actions

export default wishListSlice.reducer