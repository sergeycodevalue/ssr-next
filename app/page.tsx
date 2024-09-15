import PokemonsPage from "@/app/pokemons/page";
import Loader from "@/src/components/Loaders/Loader";
import { Suspense } from "react";

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <PokemonsPage />
    </Suspense>
  );
};

export default Home;
