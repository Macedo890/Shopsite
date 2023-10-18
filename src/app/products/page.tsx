import { NextPage, Metadata } from "next";
import styles from "./page.module.css";
import { ReactNode } from "react";
import { FetchProducts, ProductType } from "@/services/database";
import ProductList from "@/components/ProductList/ProductList";
import "tailwindcss/tailwind.css";
// Metadata for the page
export const metadata: Metadata = {
  title: "Shopsite",
  description: "Shop smart, shop stylish, and shop with confidence at Shopsite",
  viewport: "initial-scale=1.0, width=device-width",
};

const getData = async () => {
  const products = await FetchProducts();

  if (!products) {
    throw new Error("Failed to fetch data");
  }

  return products;
};

const Page: NextPage = async () => {
  const product = await getData();

  return (
    <main className={styles.point}>
      <div className={styles.do}>
        <p className="font-bold text-2xl point">Nossos Produtos</p>
      </div>

      {<ProductList products={product} />}
    </main>
  );
};

export default Page;
