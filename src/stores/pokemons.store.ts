interface IPokemonShort {
  id: number;
  name: string;
  url: string;
}
interface IPokemonShortResponse {
  count: number;
  next: string;
  previous: string | null;
  results: IPokemonShort[];
}
export const getPokemons = async (
  maxItems = 50
): Promise<IPokemonShortResponse> => {
  const response = await fetch(`${process.env.POKEMON_NAMES_URL}${maxItems}`);
  const data: IPokemonShortResponse = await response.json();
  return data;
};

export interface IPokemonDetails {
  id: number;
  name: string;
  base_experience: string; // power
  sprites: {
    front_default: string;
  }; // imgUrl
}
export const getPokemonsDetails = async (
  pokemons: IPokemonShort[]
): Promise<IPokemonDetails[]> => {
  const requests = pokemons.map(({ url }) =>
    fetch(url).then((res) => res.json())
  );
  const pokemonsDetails = await Promise.all(requests);
  return pokemonsDetails;
};

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
export const getPokemonDetails = async (
  pokemonId: number
): Promise<IPokemonFullDetails> => {
  const pokemonsDetails = await fetch(
    `${process.env.POKEMON_ITEM_URL}${pokemonId}`
  ).then((res) => res.json());
  return pokemonsDetails;
};
