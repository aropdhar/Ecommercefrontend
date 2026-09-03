import { createSlice } from '@reduxjs/toolkit'

let storedValue = [];
try {
  const raw = localStorage.getItem("category");
  storedValue = raw ? JSON.parse(raw) : [];
} catch (e) {
  storedValue = [];
}

const initialState = {
  value: storedValue,
};

export const counterSlice = createSlice({
  name: 'category',
  initialState: initialState,
  reducers: {
    getCategory: (state, action) => {
      if (action.payload) {
        state.value = action.payload;
        localStorage.setItem("category", JSON.stringify(action.payload));
      } 
    },
  },
})

// Action creators are generated for each case reducer function
export const { getCategory } = counterSlice.actions

export default counterSlice.reducer