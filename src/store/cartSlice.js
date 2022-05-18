import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [], 
  total: 0,
}

const cartTotal = (items) => {
  let total = 0;
  items.forEach(item => {
    total += item.count * parseInt(item.price)
  });
  return total;
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.items = action.payload;
      state.total = cartTotal(state.items);
      localStorage.setItem('cartItems', JSON.stringify(state.items))
    },
    setCountToItem: (state, action) => {
      console.log(action.payload)
      const currentInd = state.items.findIndex(item => item.id === action.payload.itemId);
      state.items[currentInd].count = action.payload.newCount;
      state.total = cartTotal(state.items);
      localStorage.setItem('cartItems', JSON.stringify(state.items))
    },
    removeCartItem: (state, action) => {
      state.items = state.items.filter(id => id.id !== action.payload);
      state.total = cartTotal(state.items);
      localStorage.setItem('cartItems', JSON.stringify(state.items))
    },
    
  }
})

export const { setCartItems, setCountToItem, removeCartItem } = cartSlice.actions

export default cartSlice.reducer