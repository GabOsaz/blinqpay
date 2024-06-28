import { ProductT } from "@/app/(pages)/(home)/products/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  cartItems: ProductT[];
  totalCartPrice: number;
}

const initialState: CartState = {
  cartItems: [],
  totalCartPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeProductQuantity: (state, action: PayloadAction<ProductT[]>) => {
      state.cartItems = action.payload;
    },
    addToCart: (state, action: PayloadAction<ProductT>) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<ProductT[]>) => {
      state.cartItems = action.payload;
    },
    calculateTotalPrice: (state) => {
      const totalPrice = state.cartItems.reduce(
        (acc, curr) => acc + (curr?.totalPrice ? curr?.totalPrice : 0),
        0
      );
      state.totalCartPrice = totalPrice;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalCartPrice = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeProductQuantity,
  addToCart,
  removeFromCart,
  calculateTotalPrice,
  clearCart,
} = cartSlice.actions;

// export const cartReducer = cartSlice.reducer
export default cartSlice.reducer;
