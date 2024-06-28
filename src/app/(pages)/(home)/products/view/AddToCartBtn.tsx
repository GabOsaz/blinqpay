"use client";

import useAddToCartBtnLogic from "../controller/useAddToCartBtnLogic";
import { ProductT } from "../types";

function AddToCartBtn({ product }: { product: ProductT }) {
  const { handleAddToCart, alreadyInCart } = useAddToCartBtnLogic();
  return (
    <button onClick={() => handleAddToCart(product)} className={`${alreadyInCart(product) ? 'bg-red-600' : 'bg-green-700'} text-white py-2 px-2.5 rounded-lg`}>
      {alreadyInCart(product) ? 'Remove from' : 'Add to'} Cart
    </button>
  );
}

export default AddToCartBtn;
