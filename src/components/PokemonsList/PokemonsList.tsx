import { ComponentProps } from "react";
import Link from "next/link";

import PokemonDetails from "./PokemonDetails";

type IPokemonDetails = ComponentProps<typeof PokemonDetails>["pokemon"];
interface PokemonListProps {
  pokemons: IPokemonDetails[];
}
const PokemonsList = ({ pokemons }: PokemonListProps) => {
  return (
    <>
      {pokemons.map((pokemon) => (
        <Link
          href={`/pokemons/${pokemon.id}`}
          className="flex flex-col justify-center items-center w-48 h-60 m-4 text-center border border-solid border-white rounded-2xl"
          key={pokemon.name}
        >
          <PokemonDetails key={pokemon.name} pokemon={pokemon} />
        </Link>
      ))}
    </>
  );
};

export default PokemonsList;
