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
    <>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2 className="mt-[.625rem] text-xl font-bold uppercase text-white">
        {pokemon.name}
      </h2>
      <h3 className="text-l text-white">Pow: {pokemon.base_experience}</h3>
    </>
  );
};

export default PokemonDetails;
