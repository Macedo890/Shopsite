"use client";

import { ProductType } from "@/services/database";
import React from "react";
import { useCart } from "@/hooks/useCart";

type ProductListProps = {
  product: ProductType;
};

const ProductDetails: React.FC<ProductListProps> = ({ product }) => {
  const { id, name, description, price, imageUrl } = product;
  const { addProduct } = useCart();

  return (
    <div>
      <img src={imageUrl} alt="" />

      <h1>{name}</h1>

      <p>{description}</p>

      <p>R$ {price}</p>

      <button onClick={() => addProduct(product)}>Compre agora</button>
    </div>
  );
};

export default ProductDetails;
