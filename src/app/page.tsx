"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Metadata } from "next";
import { useTypingText } from "@/components/TypingText/useTypingText";
import "./style.css";

// Metadata for the page
// export const metadata: Metadata = {
//   title: "Shopsite",
//   description: "Shop smart, shop stylish, and shop with confidence at Shopsite",
//   viewport: "initial-scale=1.0, width=device-width",
// };

export default function Home() {
  const { word, stop, start } = useTypingText(
    ["need", "want", "care"],
    100,
    10
  );

  return (
    <main className={styles.main}>
      <div className="py-5 text-center">
        {/* Page title */}
        <p className="display-1 text-white">
          The best way to buy what you {word}
        </p>
        {/* Page description */}
        <p className="my-4 text-secondary">
          Join us in a journey of convenience and satisfaction. Our
          user-friendly interface and carefully curated products ensure that
          you'll find just what you're looking for. With Shopsite, shopping
          becomes an enjoyable adventure. Explore our collection, find your
          favorites, and make your shopping dreams come true. Shop smart, shop
          stylish, and shop with confidence at Shopsite. Start your shopping
          journey today and experience the best way to buy what you love.
        </p>

        {/* Button to explore products */}
        <Link href="/products" style={{ textDecoration: "none" }}>
          <button className="btn btn-light" color="dark">
            Explore our products!
          </button>
        </Link>
      </div>
    </main>
  );
}
