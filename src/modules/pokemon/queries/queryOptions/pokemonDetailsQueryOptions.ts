import { queryOptions } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";
import { fetchPokemonDetailsByIdRequest } from "../requests/fetchPokemonDetailsByIdRequest";
import type { PokemonDetails, PokemonDetailsResponse } from "../../../../types/modules/pokemon";
import { POKEMON_ENDPOINTS } from "../../../../api/pokemonEndPoints";

export const pokemonDetailsQueryOptions = ({ pokemonId }: { pokemonId: number }, options?: Omit<UseQueryOptions<PokemonDetailsResponse, Error, PokemonDetails>, "queryKey" | "queryFn" | "select">) =>
  queryOptions({
    ...options,
    queryKey: ["pokemon-details", pokemonId],
    queryFn: () => fetchPokemonDetailsByIdRequest(pokemonId),
    select: response => {
      return {
        id: pokemonId,
        name: response.name,
        spriteUrl: POKEMON_ENDPOINTS.POKEMON_SPRITE(pokemonId),
        height: response.height,
        weight: response.weight,
        types: response.types.map(item => item.type.name),
        abilities: response.abilities.map(item => ({
          name: item.ability.name,
          isHidden: item.is_hidden,
        })),
        stats: response.stats.map(item => ({
          name: item.stat.name,
          baseStat: item.base_stat,
        })),
        baseExperience: response.base_experience,
      } satisfies PokemonDetails;
    },
  });
