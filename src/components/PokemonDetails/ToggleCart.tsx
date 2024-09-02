"use client";

import { useState } from "react";

import { useCartStore } from "@/src/stores/cart.store";

export interface IPokemonDetails {
  id: number;
  name: string;
  base_experience: string; // power
  sprites: { front_default: string }; // imgUrl
}

export default ({ pokemon }: { pokemon: IPokemonDetails }) => {
  const pokemons = useCartStore(({ pokemons }) => pokemons);
  const update = useCartStore(({ update }) => update);

  const [inCart, setInCart] = useState(
    pokemons.some(({ id }) => id === pokemon.id)
  );

  const handleOnClick = () => {
    let updatedCart: IPokemonDetails[];
    if (inCart) {
      updatedCart = pokemons.filter(({ id }) => id !== pokemon.id);
    } else {
      updatedCart = [...pokemons, pokemon];
    }

    update(updatedCart);
    setInCart(!inCart);
  };

  return (
    <button
      className="flex justify-center items-center rounded-6 text-white p-4 bg-blue-500 shadow-md cursor-pointer"
      onClick={handleOnClick}
    >
      {inCart ? "Remove from cart" : "Add to cart"}
    </button>
  );
};
