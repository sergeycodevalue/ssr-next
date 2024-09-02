"use server";

import PokemonDetails from "@/src/components/PokemonDetails/PokemonDetails";
import { getPokemonDetails } from "@/src/stores/pokemons.store";

const PokemonPage = async ({ params }: { params: { id: number } }) => {
  const pokemon = await getPokemonDetails(params.id);
  
  return <PokemonDetails pokemon={pokemon} />;
};

export default PokemonPage;
