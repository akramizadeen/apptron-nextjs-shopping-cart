import { useCart } from "@/app/_context/CartContext";
import { ArrowRight } from "lucide-react";
import React from "react";

const CartSummary = () => {

  const {state} = useCart();
  const {cartItems} = state;

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const subTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const discount = subTotal * 0.2;
  const deliveryFee = 350;
  const total = subTotal - discount + deliveryFee;

  return (
    <div className="rounded-3xl border border-neautral-300 p-4 xl:p-6 xl:w-full xl:h-94">
        <h1 className="mb-4 text-2xl font-semibold xl:text-3xl">Cart Summary</h1>

        <div className="space-y-2 text-sm xl:text-base">
            <div className="flex justify-between">
                <p className="text-gray-600">Sub Total</p>
                <p className="font-semibold">LKR {subTotal}.00</p>
            </div>
            <div className="flex justify-between">
                <p className="text-gray-600">Total Items</p>
                <p className="font-semibold">{totalItems}</p>
            </div>
            <div className="flex justify-between">
                <p className="text-gray-600">Discount (20%)</p>
                <p className="font-semibold text-red-600">LKR {discount}.00</p>
            </div>
            <div className="flex justify-between border-b border-neutral-300 pb-4">
                <p className="text-gray-600">Delivery Fee</p>
                <p className="font-semibold">LKR {deliveryFee}.00</p>
            </div>
        </div>
        <div className="mt-4 flex justify-between text-lg font-semibold xl:text-xl">
            <p>Total</p>
            <p>LKR {total}.00</p>
        </div>
        <span className="w-auto mt-5 mx-10 flex items-center justify-center gap-2 py-2 px-4 bg-linear-to-r from-blue-800 to-purple-800 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-slate-100 cursor-pointer rounded-full">
            <span className="">
                Checkout
            </span>
            <ArrowRight />
        </span>
    </div>
  );
};

export default CartSummary;
