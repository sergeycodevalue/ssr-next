"use client";

import PokemonsList from "@/src/components/PokemonsList/PokemonsList";
import { useCartStore } from "@/src/stores/cart.store";

const PokemonsInCart = () => {
  const pokemons = useCartStore(({ pokemons }) => pokemons);

  if (pokemons.length === 0) {
    return "No Pokemons in cart";
  }

  return <PokemonsList pokemons={pokemons} />;
};

export default PokemonsInCart;
