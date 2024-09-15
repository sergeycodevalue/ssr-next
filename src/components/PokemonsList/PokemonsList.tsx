import { ComponentProps } from "react";

import PokemonDetails from "./PokemonDetails";

type IPokemonDetails = ComponentProps<typeof PokemonDetails>["pokemon"];
interface PokemonListProps {
  pokemons: IPokemonDetails[];
}
const PokemonsList = ({ pokemons }: PokemonListProps) => {
  return (
    <>
      {pokemons.map((pokemon) => (
        <PokemonDetails key={pokemon.name} pokemon={pokemon} />
      ))}
    </>
  );
};

export default PokemonsList;
