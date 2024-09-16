"use client";

import Link from "next/link";
import { useCartStore } from "@/src/stores/cart.store";

const Cart = () => {
  const pokemons = useCartStore(({ pokemons }) => pokemons);

  return (
    <Link
      href="/cart"
      className="relative ml-2 text-xl text-white hover:text-blue"
    >
      <span className="absolute -top-2 -right-4 rounded-[50%] w-5 h-5 p-0.5 flex justify-center text-xs bg-blue-500">
        {pokemons.length}
      </span>
      Cart
    </Link>
  );
};

export default Cart;
