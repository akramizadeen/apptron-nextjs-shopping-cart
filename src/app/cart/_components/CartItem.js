import { useCart } from "@/app/_context/CartContext";
import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

const CartItem = ({ item }) => {

  const {dispatch} = useCart();

  return (
        <div className="rounded-3xl border border-neutral-300 xl:w-11/12 mb-3">
            <div className="flex flex-col gap-6 border-b border-neutral-300 px-4 py-6 sm:flex-row sm:items-center">
                <Image className="mx-auto w-36 rounded-2xl bg-gray-300 p-4 sm:mx-0 sm:w-32" src={item.image} alt={item.name} />
                <div className="flex w-full flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-bold xl:text-2xl">{item.name}</h1>
                        <Trash className="h-5 w-5 cursor-pointer text-red-600"
                            onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
                        />
                    </div>

                    <div className="flex items-center justify-between mt-3">
                        <h1 className="text-2xl font-semibold xl:text-3xl">LKR {item.price}.00</h1>
                        <div className="flex h-11 items-center gap-4 rounded-3xl bg-gray-50 px-4">
                            <Minus className="h-5 w-5 cursor-pointer"
                                onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}
                            />
                            <span>
                                {item.quantity}
                            </span>
                            <Plus className="h-5 w-5 cursor-pointer"
                                onClick={() => dispatch({ type: "INCREMENT", payload: item.id })}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default CartItem;
