"use client";

import { useState } from "react";

import { useCartStore } from "@/src/stores/cart.store";

interface IPokemonDetails {
  id: number;
  name: string;
  base_experience: string; // power
  sprites: { front_default: string }; // imgUrl
}

const ToggleCart = ({ pokemon }: { pokemon: IPokemonDetails }) => {
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
    <div className="absolute top-1 right-1 z-20">
      <div
        className="relative flex justify-center items-center w-10 h-10 text-3xl rounded-[50%] text-white bg-blue-500 shadow-md cursor-pointer"
        onClick={handleOnClick}
      >
        {inCart ? "-" : "+"}
      </div>
    </div>
  );
};

export default ToggleCart;
