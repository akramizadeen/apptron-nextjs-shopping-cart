'use client'

import React from "react";
import CartItem from "./_components/CartItem";
import CartSummary from "./_components/CartSummary";
import Link from "next/link";
import { useCart } from "../_context/CartContext";

const CartPage = () => {

  const {state} = useCart();
  const {cartItems} = state;
  
  if (cartItems.length === 0) {
    return (
      <div className="text-center my-20">
        <h1 className="text-3xl font-medium m-2 mb-7">Cart is Empty</h1>
        <Link href="/">
          <span className="p-3 m-2 border-2 border-purple-600 text-purple-600 hover:border-blue-600 hover:text-blue-600 transition-all duration-300">Go to Home</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto my-8 w-full px-4 xl:my-10 xl:w-10/12">
      <div className="space-y-4">
        <div className="flex items-center text-sm xl:text-base">
          <Link href="/">
            <h1 className="cursor-pointer font-semibold text-gray-600 hover:underline">Home</h1>
          </Link>
          <h2 className="ml-2 font-semibold">Cart</h2>
        </div>

        <h1 className="font-mono text-4xl xl:text-5xl">Your Cart</h1>
      </div>

      <div className="mt-8 flex flex-col gap-6 xl:flex-row">
        <div className="w-full xl:w-7/12">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="w-full xl:w-5/12">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
