"use client";

import { ProductType } from "@/services/database";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type CartContextType = {
  cart: ProductType[];
  addProduct: (product: ProductType) => void;
  removeProduct: (productId: number) => void;
};

const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartContextProvider = (props: { children: ReactNode }) => {
  const [cart, setCart] = useState<ProductType[]>([]);

  useEffect(() => {
    const item = localStorage.getItem("ProductStorage");

    if (item) {
      setCart(JSON.parse(item));
    }
  }, []);

  const addProduct = (product: ProductType) => {
    const getitems = [...cart, product];

    localStorage.setItem("ProductStorage", JSON.stringify(getitems));

    setCart(getitems);
  };

  const removeProduct = (productId: number) => {
    const locateproduct = cart.findIndex((product) => product.id == productId);

    if (locateproduct !== -1) {
      const products = [...cart];
      products.splice(locateproduct, 1);
      localStorage.setItem("ProductStorage", JSON.stringify(products));
      setCart(products);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {props.children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
