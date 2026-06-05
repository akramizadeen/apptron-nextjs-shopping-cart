'use client'

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useCart } from "../_context/CartContext";

const Header = () => {

    const {state} = useCart();

    const totalItems = state.cartItems.reduce((sum, item) => sum + item.quantity, 0)

    return (
        <div className="grid-cols-1 flex items-center justify-between py-5 px-10 bg-slate-100 shadow-lg">
            <Link href="/">
                <div className="text-2xl font-bold bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent cursor-pointer">
                    Shopping Cart
                </div>
            </Link>
            <div className="relative flex items-center justify-center gap-4">
                <Link href="/cart">
                    <ShoppingCart className="w-8 h-8 cursor-pointer"/>
                    {totalItems > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                            {totalItems}
                        </span>
                    )}
                </Link>
            </div>
        </div>
    );
};

export default Header;
