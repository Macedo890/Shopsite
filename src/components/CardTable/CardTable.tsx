"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/hooks/useCart";
import { ProductType } from "@/services/database";

type CartEntry = {
  product: ProductType;
  quantity: number;
};

const CartTableRow = (props: { entry: CartEntry }) => {
  const { addProduct, removeProduct } = useCart();

  return (
    <tr>
      <td>
        <div className="align-items-center" style={{ minWidth: "42rem" }}>
          <div>
            <img
              src={props.entry.product.imageUrl}
              alt={props.entry.product.name}
            />
          </div>
          <div>{props.entry.product.name}</div>
        </div>
      </td>
      <td>R$ {props.entry.product.price}</td>
      <td>{props.entry.quantity}</td>
      <td>R$ {props.entry.product.price * props.entry.quantity}</td>
      <td>
        <button onClick={() => addProduct(props.entry.product)}>+</button>{" "}
        <button onClick={() => removeProduct(props.entry.product.id)}>–</button>
      </td>
    </tr>
  );
};

export default function CartTable() {
  const [cartEntries, setCartEntries] = useState<CartEntry[]>([]);
  const { cart } = useCart();

  useEffect(() => {
    const entriesList = cart.reduce((list, product) => {
      const entryIndex = list.findIndex(
        (entry) => entry.product.id === product.id
      );

      if (entryIndex === -1) {
        return [
          ...list,
          {
            product,
            quantity: 1,
          },
        ];
      }

      list[entryIndex].quantity++;
      return list;
    }, [] as CartEntry[]);

    entriesList.sort((a, b) => a.product.id - b.product.id);
    setCartEntries(entriesList);
  }, [cart]);

  return (
    <table className="align-middle" style={{ minWidth: "42rem" }}>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Qtd.</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cartEntries.map((entry) => (
          <CartTableRow key={entry.product.id} entry={entry} />
        ))}
      </tbody>
    </table>
  );
}
