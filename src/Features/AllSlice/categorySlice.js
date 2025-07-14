import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const counterSlice = createSlice({
  name: 'category',
  initialState: initialState,
  reducers: {
    getCategory: (state, action) => {
      console.log(state);
    },
  },
})

// Action creators are generated for each case reducer function
export const { getCategory } = counterSlice.actions

export default counterSlice.reducer