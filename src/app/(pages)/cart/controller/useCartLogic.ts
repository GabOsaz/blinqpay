"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { ProductT } from "../../(home)/products/types";
import {
  calculateTotalPrice,
  changeProductQuantity,
  clearCart,
  removeFromCart,
} from "@/lib/features/cart/cartSlice";
import { useRouter } from "next/navigation";

function useCartLogic() {
  const { cartItems, totalCartPrice } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleQtyChange = (product: any, qtyChange: string) => {
    const newQuantity =
      qtyChange === "+" ? product.quantity + 1 : product.quantity - 1;
    const foundItem = cartItems.find(
      (item: ProductT) => item.id === product.id
    );
    const updatedItem = {
      ...foundItem,
      quantity: newQuantity,
      totalPrice: newQuantity * product.price,
    };
    const updatedState = cartItems.map((item: any) =>
      item.id === foundItem?.id ? updatedItem : item
    );

    if (newQuantity < 1) {
        // Deletes item from cart when quantity is 0.
      const filterCart = cartItems.filter(
        (item: ProductT) => item.id !== product.id
      );
      dispatch(removeFromCart(filterCart));
      return dispatch(calculateTotalPrice());
    }
    dispatch(changeProductQuantity(updatedState));
    dispatch(calculateTotalPrice());
  };

  const handleCheckout = () => {
    router.push('/');
    dispatch(clearCart());
  }

  return { cartItems, handleQtyChange, totalCartPrice, handleCheckout };
}

export default useCartLogic;
