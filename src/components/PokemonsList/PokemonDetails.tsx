import Link from "next/link";

import ToggleCart from "./ToggleCart";

interface IPokemonDetails {
  id: number;
  name: string;
  sprites: { front_default: string }; // imgUrl
  base_experience: string; // power
}

interface PokemonListProps {
  pokemon: IPokemonDetails;
}
const PokemonDetails = ({ pokemon }: PokemonListProps) => {
  return (
    <div className="relative m-4">
      <Link
        href={`/pokemons/${pokemon.id}`}
        className="flex flex-col justify-center items-center w-48 h-60 text-center border border-solid border-white rounded-2xl
          before:content-[''] before:absolute before:block before:top-0 before:right-[50%] before:bottom-0 before:left-0 before:bg-gradient-to-r before:from-pink-500 before:to-violet-500 before:rounded-tl-2xl before:rounded-bl-2xl before:z-10
          after:content-[''] after:absolute after:block after:top-0 after:right-0 after:bottom-0 after:left-[50%] after:bg-gradient-to-r after:from-indigo-500 after:to-violet-500 after:rounded-tr-2xl after:rounded-br-2xl after:z-10
          "
        key={pokemon.name}
      >
        <div className="absolute z-20 flex flex-col items-center">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h2 className="mt-[.625rem] text-xl font-bold uppercase text-white">
            {pokemon.name}
          </h2>
          <h3 className="text-l text-white">Pow: {pokemon.base_experience}</h3>
        </div>
      </Link>
      <ToggleCart pokemon={pokemon} />
    </div>
  );
};

export default PokemonDetails;
