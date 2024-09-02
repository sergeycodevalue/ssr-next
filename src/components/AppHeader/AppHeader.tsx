"use client";

import Link from "next/link";

import { useCartStore } from "@/src/stores/cart.store";

export default () => {
  const pokemons = useCartStore(({ pokemons }) => pokemons);

  return (
    <div
      className="sticky top-0 flex flex-row justify-between items-center h-16 px-8 py-1 z-50"
      style={{ backgroundColor: "#aa00ff" }}
    >
      <img
        src="/pokemon_logo.png"
        alt="Pokemon Logo"
        className="w-[auto] h-[100%]"
      />
      <div className="flex">
        <Link href="/" className="text-xl text-black hover:text-blue">
          Home
        </Link>
      </div>
      <div className="flex">
        <Link
          href="/cart"
          className="relative ml-2 text-xl text-white hover:text-blue"
        >
          <span className="absolute -top-2 -right-4 rounded-[50%] w-5 h-5 p-0.5 flex justify-center text-xs bg-blue-500">
            {pokemons.length}
          </span>
          Cart
        </Link>
      </div>
    </div>
  );
};
