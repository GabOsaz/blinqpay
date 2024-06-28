
import Image from "next/image";
import React from "react";
import { ProductT } from "../types";
import AddToCartBtn from "./AddToCartBtn";
import StoreProvider from "@/components/StoreProvider";

function ProductItem({ product }: { product: ProductT }) {
  const { id, title, price, image } = product;

  return (
    <li className="flex flex-col justify-between" key={id}>
      <div>
        <div className="bg-white w-full h-[16rem] flex items-center justify-center rounded-2xl">
          <Image alt={title} src={image} width="122" height="76" />
        </div>
        <h3 className="w-4/5 mt-4">{title}</h3>
      </div>
      <div className="flex flex-col justify-between">
        <div className="mt-3 flex justify-between items-center">
          <span>${price}</span>
          <StoreProvider>
            <AddToCartBtn product={product} />
          </StoreProvider>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
