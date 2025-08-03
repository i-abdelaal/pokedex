import type { PokemonDetailsResponse } from "../../../../types/modules/pokemon";
import { httpClient } from "../../../../utils/httpClient";
import { POKEMON_ENDPOINTS } from "../../../../api/pokemonEndPoints";

export const fetchPokemonDetailsByIdRequest = async (pokemonId: number) => {
  const response = await httpClient.get<PokemonDetailsResponse>(POKEMON_ENDPOINTS.POKEMON_DETAILS(pokemonId));
  return response.data;
};
