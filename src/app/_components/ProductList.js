import React from "react";
import ProductCard from "./ProductCard";
import { products } from "@/assets/data/data";

const ProductList = () => {
    return (
        <div className="grid grid-cols-1 w-full md:grid-cols-4 md:px-18 gap-3">
            {products.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </div>
    );
};

export default ProductList;
