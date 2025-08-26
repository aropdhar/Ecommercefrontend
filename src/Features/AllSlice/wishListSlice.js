import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem("wishlistItem") ? JSON.parse(localStorage.getItem("wishlistItem"))  : [],
}

export const wishListSlice = createSlice({
  name: 'wishListSlice',
  initialState,
  reducers: {
    wishlistadd: (state, action) => { 
      
       const wishlistItem = state.value.findIndex((item) => {
          return item._id === action.payload._id;
       });
      
       if (wishlistItem === -1) {
        state.value.push(action.payload);
        localStorage.setItem("wishlistItem", JSON.stringify(state.value));
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { wishlistadd } = wishListSlice.actions

export default wishListSlice.reducer