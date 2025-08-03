import { queryOptions, type UseQueryOptions } from "@tanstack/react-query";
import { fetchPokemonListRequest } from "../requests/fetchPokemonListRequest";
import { extractPokemonId } from "../../utils/strings";
import type { PokemonListItem, PokemonListPaginationOptions, PokemonListResponse } from "../../../../types/modules/pokemon";
import { POKEMON_ENDPOINTS } from "../../../../api/pokemonEndPoints";
import { PokemonListPaginationDefaultValues } from "../../constants";

export const pokemonListQueryOptions = (
  { pageNumber }: PokemonListPaginationOptions,
  options?: Omit<UseQueryOptions<PokemonListResponse, Error, PokemonListResponse>, "queryKey" | "queryFn" | "select">
) =>
  queryOptions({
    ...options,
    queryKey: ["pokemon-list", pageNumber],
    queryFn: () =>
      fetchPokemonListRequest({
        offset: (pageNumber - 1) * PokemonListPaginationDefaultValues.LIMIT + PokemonListPaginationDefaultValues.OFFSET,
      }),
    select: response => {
      return {
        count: response.count,
        next: response.next,
        previous: response.previous,
        data: response.results.map(pokemon => {
          const pokemonId = extractPokemonId(pokemon.url);
          return {
            id: pokemonId,
            name: pokemon.name,
            spriteUrl: POKEMON_ENDPOINTS.POKEMON_SPRITE(pokemonId),
          } satisfies PokemonListItem;
        }),
      };
    },
  });
