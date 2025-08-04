import { createFileRoute } from "@tanstack/react-router";
import { InfiniteScrollListPage } from "../../../pages/pokemon/InfiniteScrollListPage";
import { pokemonListInfiniteQueryOptions } from "../../../modules/pokemon/queries/queryOptions/pokemonListInfiniteQueryOptions";
import { queryClient } from "../../../utils/queryClient";

export const Route = createFileRoute("/(pokemon)/_pokemon-list/infinite-scroll")({
  loader: async () => {
    queryClient.prefetchInfiniteQuery(pokemonListInfiniteQueryOptions());
    return queryClient.ensureInfiniteQueryData(pokemonListInfiniteQueryOptions());
  },
  component: InfiniteScrollListPage,
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: () => <div>Error loading Pokemon list</div>,
});
