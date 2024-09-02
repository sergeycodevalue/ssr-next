"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { IPokemonDetails } from "./pokemons.store";

interface IState {
  pokemons: IPokemonDetails[];
}
interface IActions {
  update: (updated: IPokemonDetails[]) => void;
}

export const useCartStore = create<IState & IActions>()(
  persist(
    (set) => ({
      pokemons: [],
      update: (pokemons: IPokemonDetails[]) => set({ pokemons }),
    }),
    {
      name: "cart-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
