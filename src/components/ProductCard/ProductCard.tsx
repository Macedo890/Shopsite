"use client";

import { ProductType } from "@/services/database";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, Card, CardBody, CardSubtitle } from "reactstrap";
import { useCart } from "@/hooks/useCart";

type ProductListProps = {
  product: ProductType;
};

const ProductCard: React.FC<ProductListProps> = ({ product }) => {
  const { id, name, description, price, imageUrl } = product;
  const { addProduct } = useCart();

  return (
    <div
      key={id}
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white	"
    >
      <Link href={`/products/${id}`}>
        <img className="w-full" src={imageUrl} alt="Product" />
      </Link>

      <div className="px-6 py-4">
        <Link href={`/products/${id}`}>
          <p className="font-bold text-xl mb-2" style={{ cursor: "pointer" }}>
            {name}
          </p>
        </Link>
        <p className="text-gray-700 text-base">R$ {price}</p>

        <button
          color="dark"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => addProduct(product)}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
