"use server";

const PokemonPage = async ({ params }: { params: { id: string } }) => {
  return <div>Pokemon #{params.id}</div>;
};

export default PokemonPage;
