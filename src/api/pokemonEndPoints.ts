const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;
const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_URL as string;

export const POKEMON_ENDPOINTS = {
  POKEMON_LIST: (limit: number, offset: number) => `${API_BASE_URL}pokemon?limit=${limit}&offset=${offset}`,
  POKEMON_DETAILS: (pokemonId: number) => `${API_BASE_URL}pokemon/${pokemonId}`,
  POKEMON_SPRITE: (pokemonId: number) => `${IMAGE_BASE_URL}${pokemonId}.png`,
};
