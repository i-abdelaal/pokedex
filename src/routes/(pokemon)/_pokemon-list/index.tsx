import { createFileRoute } from "@tanstack/react-router";
import { PaginatedListPage } from "../../../pages/pokemon/PaginatedListPage";
import { pokemonListQueryOptions } from "../../../modules/pokemon/queries/queryOptions/pokemonListQueryOptions";
import { PokemonListPaginationDefaultValues } from "../../../modules/pokemon/constants";
import { queryClient } from "../../../utils/queryClient";
import { QueryErrorPage } from "../../../pages/pokemon/QueryErrorPage";
import { ListPageLoader } from "../../../modules/pokemon/ui/components/loaders/ListPageLoader";

export const Route = createFileRoute("/(pokemon)/_pokemon-list/")({
  validateSearch: search => {
    return !isNaN(Number(search.page)) && Number(search.page) > 0 ? { page: Number(search.page) } : { page: PokemonListPaginationDefaultValues.PAGE_NUMBER };
  },
  loader: async () => {
    await queryClient.prefetchQuery(
      pokemonListQueryOptions({
        pageNumber: PokemonListPaginationDefaultValues.PAGE_NUMBER,
      })
    );
    return queryClient.ensureQueryData(
      pokemonListQueryOptions({
        pageNumber: PokemonListPaginationDefaultValues.PAGE_NUMBER,
      })
    );
  },
  component: PaginatedListPage,
  pendingComponent: ListPageLoader,
  errorComponent: () => <QueryErrorPage queryOptions={pokemonListQueryOptions({ pageNumber: PokemonListPaginationDefaultValues.PAGE_NUMBER })} errorMessage="Failed to load Pokemon list" />,
});
