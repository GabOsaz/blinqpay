"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { ProductT } from "../types";
import { addToCart, removeFromCart } from "@/lib/features/cart/cartSlice";
// import { addToCart, removeFromCart } from "@/store/slices/cartSlice";

function useAddToCartBtnLogic() {
  const initialQty = 1;
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const dispatch = useAppDispatch();

  const alreadyInCart = (cartItem: ProductT) => {
    const found = cartItems.find((item: ProductT) => item.id === cartItem.id);
    return found;
  };

  const handleAddToCart = (cartItem: ProductT) => {
    const updatedCartItem = {
      ...cartItem,
      quantity: initialQty,
      totalPrice: initialQty * cartItem.price,
    };
    const removedUpdatedCart = cartItems.filter((item: ProductT) => cartItem.id !== item.id);
    alreadyInCart(cartItem) ? dispatch(removeFromCart(removedUpdatedCart))
    : dispatch(addToCart(updatedCartItem));
  };

  return { handleAddToCart, alreadyInCart };
}

export default useAddToCartBtnLogic;
