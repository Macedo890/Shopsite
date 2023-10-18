"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import "./Header.css";

export default function Header() {
  // State to track the active link
  const [activeLink, setActiveLink] = useState(null);

  // Function to handle link click and set the active link
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header>
      {/* Site title */}
      <Link href="/">
        <p className="h1 text-white">NeosGama</p>
      </Link>
      {/* Navigation links */}
      <nav>
        <Link href="/products">
          <button
            onClick={() => handleLinkClick("link1")}
            className={
              activeLink === "link1"
                ? "bicon active btn text-white"
                : "bicon btn text-white"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#FFFF"
              class="bi bi-bag"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
            <p className="text_button">Products</p>
          </button>
        </Link>
        <Link href="/cart">
          <button
            onClick={() => handleLinkClick("link2")}
            className={
              activeLink === "link2"
                ? "bicon active btn text-white"
                : "bicon btn text-white"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#FFFF"
              class="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <p className="text_button">Cart</p>
          </button>
        </Link>
      </nav>
    </header>
  );
}
