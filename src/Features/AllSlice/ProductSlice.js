import { createSlice } from '@reduxjs/toolkit'
import { SuccessToast , ErrorToast , InfoToast } from '../../utils/toast';

const initialState = {
  value: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : [],
  totalAmount: 0,
  totalItem: 0
}

export const ProductSlice = createSlice({
  name: 'ProductSlice',
  initialState,
  reducers: {
    addtocart: (state, action) => {
    
      const SearchItem = state.value.findIndex((item)=>{
           return item._id == action.payload._id;
      });
      
      if(SearchItem >= 0){

        state.value[SearchItem].cartQuantity += 1;
        InfoToast(`${state.value[SearchItem].name} Again Add To Cart Successfully`);
        localStorage.setItem("cartItem" , JSON.stringify(state.value));

      }else{
        state.value.push({...action.payload , cartQuantity: 1});
        SuccessToast(`${action.payload.name} Add To Cart Successfully`);
        localStorage.setItem("cartItem" , JSON.stringify(state.value));

      }
    },
    removecart: (state, action) => {
        const FindItem = state.value.filter((item)=>{
          return item._id !== action.payload._id
      })

      state.value = FindItem;
      ErrorToast(`${action.payload.name} is Remove`)
      localStorage.setItem("cartItem" , JSON.stringify(state.value))
    },

    incrementCart: (state , action) =>{
      const incrementItem = state.value.findIndex((item)=>{
        return item._id === action.payload._id;
      })
      

      state.value[incrementItem].cartQuantity += 1;
      localStorage.setItem("cartItem" , JSON.stringify(state.value))
      SuccessToast(`${action.payload.name} Increment`)
    },

    decrementCart: (state , action) =>{
       
      const decrementItem = state.value.findIndex((item)=>{
        return item._id === action.payload._id;
      })
      
      if(state.value[decrementItem].cartQuantity > 1){

        state.value[decrementItem].cartQuantity -= 1;
        localStorage.setItem("cartItem" , JSON.stringify(state.value))
        SuccessToast(`${action.payload.name} Decrement`)

      }
      else{
        ErrorToast(`${action.payload.name} Minimum Cartquantity 1`)
      }
    },
    getTotal: (state , action) =>{

      const total = state.value.reduce(
      (initialValue, item) => {
        const { price, cartQuantity } = item;
        const TotalPrice = typeof price === "string" ? parseFloat(price.replace(/,/g, "")) : price;
        initialValue.amount += TotalPrice * cartQuantity;
        initialValue.quantity += cartQuantity;

        return initialValue;
      },
      { amount: 0, quantity: 0 }
      );
      
      state.totalAmount = total.amount;
      state.totalItem = total.quantity;

    }

  },
})

// Action creators are generated for each case reducer function
export const { addtocart , removecart , incrementCart , decrementCart , getTotal} = ProductSlice.actions

export default ProductSlice.reducer