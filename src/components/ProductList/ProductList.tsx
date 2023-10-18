import { ProductType } from "@/services/database";
import { Row, Col } from "reactstrap";
import React from "react";
import ProductCard from "@/components/ProductCard/ProductCard";

type ProductListProps = {
  products: ProductType[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="flex flex-wrap -m-4">
      {products.map((product) => (
        <div key={product.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
