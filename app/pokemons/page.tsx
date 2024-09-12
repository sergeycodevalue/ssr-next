"use server";

import PokemonsList from "@/src/components/PokemonsList/PokemonsList";
import { getPokemons, getPokemonsDetails } from "@/src/stores/pokemons.store";

// const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const PokemonsPage = async () => {
  const pokemons = await getPokemons();
  // await delay(2000);
  const pokemonsDetails = await getPokemonsDetails(pokemons.results);

  return (
    <div className="flex flex-wrap justify-center">
      <PokemonsList pokemons={pokemonsDetails} />
    </div>
  );
};

export default PokemonsPage;
