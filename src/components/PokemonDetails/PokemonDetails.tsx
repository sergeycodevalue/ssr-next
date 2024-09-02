interface IPokemonFullDetailsAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}
export interface IPokemonFullDetails {
  id: number;
  name: string;
  abilities: IPokemonFullDetailsAbility[];
  base_experience: number; // power
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  }; // imgUrl
}

interface PokemonListProps {
  pokemon: IPokemonFullDetails;
}
const PokemonDetails = ({ pokemon }: PokemonListProps) => {
  const abilities = pokemon.abilities.map(({ ability }) => ability.name);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col m-4 text-center" key={pokemon.name}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h2 className="mt-[.625rem] text-xl font-bold uppercase text-white">
          {pokemon.name}
        </h2>
        <h3 className="text-l text-white">Pow: {pokemon.base_experience}</h3>
        {abilities.length > 0 && <h3>Abilities: {abilities.join(", ")}</h3>}
        <h3 className="text-l text-white">Height: {pokemon.height}</h3>
        <h3 className="text-l text-white">weight: {pokemon.weight}</h3>
      </div>
    </div>
  );
};

export default PokemonDetails;
