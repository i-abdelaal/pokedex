import type { PokemonListInfiniteScrollOptions, PokemonListResponse } from "../../../../types/modules/pokemon";
import { httpClient } from "../../../../utils/httpClient";
import { POKEMON_ENDPOINTS } from "../../../../api/pokemonEndPoints";
import { PokemonListPaginationDefaultValues } from "../../constants";

export const fetchPokemonListRequest = async ({ limit = PokemonListPaginationDefaultValues.LIMIT, offset = PokemonListPaginationDefaultValues.OFFSET }: PokemonListInfiniteScrollOptions) => {
  const response = await httpClient.get<PokemonListResponse>(POKEMON_ENDPOINTS.POKEMON_LIST(limit, offset));
  return response.data;
};
