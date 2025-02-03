import { createSlice } from '@reduxjs/toolkit';
import { CartType } from '@constants/cart';
import { getLocalState } from '@utils/helper';

const initialState = {
  cart: getLocalState('cart') || {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: { payload: string }) => {
      const id = action.payload;
      if (state.cart[id]) {
        state.cart[id].qty += 1;
      } else {
        state.cart[id] = { id, qty: 1 };
      }
    },
    decrement: (state, action: { payload: string }) => {
      const id = action.payload;
      if (state.cart[id].qty > 1) {
        state.cart[id].qty -= 1;
      } else {
        delete state.cart[id];
      }
    },
    remove: (state, action: { payload: string }) => {
      delete state.cart[action.payload];
    },
  },
});

export const { add, decrement, remove } = cartSlice.actions;
export default cartSlice.reducer;
