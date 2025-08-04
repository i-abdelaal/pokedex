export type PokemonDetailsResponse = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;
  abilities: Array<{
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }>;
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }>;
  base_experience: number;
};

export type PokemonAbility = {
  name: string;
  isHidden: boolean;
};

export type PokemonStat = {
  name: string;
  baseStat: number;
};

export type PokemonDetails = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string[];
  spriteUrl: string;
  abilities: PokemonAbility[];
  stats: PokemonStat[];
  baseExperience: number;
};

export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{
    name: string;
    url: string;
  }>;
};

export type PokemonListItem = {
  id: number;
  name: string;
  spriteUrl: string;
};

export type PokemonInfiniteScrollResponse = {
  count: number;
  data: PokemonListItem[][];
};

export type PokemonList = {
  count: number;
  next: string | null;
  previous: string | null;
  data: PokemonListItem[];
};

export type PokemonListInfiniteScrollOptions = {
  offset: number;
  limit?: number;
};

export type PokemonListPaginationOptions = {
  pageNumber: number;
};

export type PokemonListItemCardProps = {
  pokemon: PokemonListItem;
};

export type PokemonCardProps = {
  pokemon: PokemonDetails;
};
