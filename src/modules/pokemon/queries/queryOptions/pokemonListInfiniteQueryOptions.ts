import { infiniteQueryOptions } from "@tanstack/react-query";
import { fetchPokemonListRequest } from "../requests/fetchPokemonListRequest";
import { extractNextPageOffset } from "../../utils/formats";
import { extractPokemonId } from "../../utils/formats";
import { chunkArray } from "../../utils/arrays";
import { POKEMON_ENDPOINTS } from "../../../../api/pokemonEndPoints";
import type { PokemonInfiniteScrollResponse, PokemonListItem, PokemonListResponse } from "../../../../types/modules/pokemon";
import { PokemonListPaginationDefaultValues } from "../../constants";

export const pokemonListInfiniteQueryOptions = () => {
  return infiniteQueryOptions<PokemonListResponse, Error, PokemonInfiniteScrollResponse, readonly string[], number>({
    queryKey: ["pokemon-list-infinite-scroll"],
    queryFn: ({ pageParam = PokemonListPaginationDefaultValues.OFFSET }) => fetchPokemonListRequest({ offset: pageParam }),
    initialPageParam: PokemonListPaginationDefaultValues.OFFSET,
    getNextPageParam: (response: PokemonListResponse) => {
      if (!response.next) return undefined;
      return extractNextPageOffset(response.next);
    },
    select: response => {
      return {
        count: response.pages[0].count,
        data: (() => {
          const allPokemon = response.pages
            .flatMap(page => page.results)
            .map(pokemon => {
              const pokemonId = extractPokemonId(pokemon.url);
              return {
                id: pokemonId,
                name: pokemon.name,
                spriteUrl: POKEMON_ENDPOINTS.POKEMON_SPRITE(pokemonId),
              } satisfies PokemonListItem;
            });

          // Chunk the array into groups of 4
          return chunkArray(allPokemon, 4);
        })(),
      } satisfies PokemonInfiniteScrollResponse;
    },
  });
};
