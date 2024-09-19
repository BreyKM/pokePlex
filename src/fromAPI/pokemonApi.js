import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/"}),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name.toLowerCase()}`,
    }),
    getPokemonSpeciesByName: builder.query({
      query: (name) => `pokemon-species/${name.toLowerCase()}`,
    }),

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApiMiddleware),
    

  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
export const { useGetPokemonSpeciesByNameQuery } = pokemonApi;
