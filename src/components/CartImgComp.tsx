"use client";

import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { calculateTotalPrice } from "@/lib/features/cart/cartSlice";

export default function CartImgComp() {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <div className="z-50">
      <button disabled={cartItems.length === 0} onClick={() => {router.push("/cart"); dispatch(calculateTotalPrice());}} className="relative disabled:cursor-not-allowed">
        <Image
          width="48"
          height="48"
          src="https://img.icons8.com/emoji/48/000000/shopping-cart-emoji.png"
          alt="shopping-cart-emoji"
        />
        {cartItems.length !== 0 ? (
          <span className="absolute top-0 left-0 w-6 h-6 rounded-full bg-green-700 flex items-center justify-center">
            {cartItems.length < 10 ? cartItems.length : "9+"}
          </span>
        ) : null}
      </button>
    </div>
  );
}
