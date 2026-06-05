'use client'

import Image from "next/image";
import React from "react";
import { useCart } from "../_context/CartContext";

const ProductCard = ({ product }) => {

    const {dispatch} = useCart();

    const handleAddToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            payload: product,
        })
    }

    return (
        <div className="bg-white rounded-xl shadow-md mb-6">
            <div className="bg-linear-to-tr from-blue-400 to-purple-400 rounded-tr-xl rounded-tl-xl hover:from-purple-400 hover:to-blue-400 transition-all duration-300">
                <Image src={product.image} loading="lazy" placeholder="blur" alt="Product" className="w-full h-80" />
            </div>
            <div className="p-3 flex items-center justify-between">
                <div>
                    <h3 className=" font-medium text-slate-900">{product.name}</h3>
                    <p className="text-slate-600">LKR {product.price}.00</p>
                </div>
                <div>
                    <span className="py-2 px-3 text-sm bg-linear-to-r from-blue-800 to-purple-800 hover:from-purple-800 hover:to-blue-800 text-slate-100 cursor-pointer transition-all duration-300" onClick={handleAddToCart}>
                        Add to Cart
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
