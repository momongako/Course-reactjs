import { createSlice } from '@reduxjs/toolkit';

const initCart = {
  numberCart: 0,
  Carts: [],
  _products: [],
  total: 0,
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState: initCart,
  reducers: {
    addCart(state, action) {
      // if (state.numberCart === 0) {
      //   let cart = {
      //     id: action.payload.id,
      //     quantity: 1,
      //     name: action.payload.name,
      //     picture: action.payload.picture,
      //     price: action.payload.price,
      //   };
      //   state.Carts.push(cart);
      // } else {
      //   let check = false;
      //   for (var i = 0; i < state.Carts.length; i++) {
      //     if (state.Carts[i].id === action.payload.id) {
      //       state.Carts[i].quantity++;
      //       check = true;
      //       break;
      //     }
      //   }
      //   if (!check) {
      //     let _cart = {
      //       id: action.payload.id,
      //       quantity: 1,
      //       name: action.payload.name,
      //       picture: action.payload.picture,
      //       price: action.payload.price,
      //     };
      //     state.Carts.push(_cart);
      //   }
      // }
      state.numberCart++;
    },
  },
});

export const cartActions = cartSlice.actions;
