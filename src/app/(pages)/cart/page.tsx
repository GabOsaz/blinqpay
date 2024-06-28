"use client";

import StoreProvider from "@/components/StoreProvider";
import React from "react";
import CartTable from "./view/CartTable";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  return (
    <div className="py-8">
      <button type="button" className="hidden md:block ml-36 sticky top-8" onClick={() => router.push('/')}>{'<<'} Go back </button>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold sticky top-3">Your Cart</h1>
        <StoreProvider>
          <CartTable />
        </StoreProvider>
      </div>
    </div>
  );
}

export default page;
