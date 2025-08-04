import { createFileRoute } from "@tanstack/react-router";
import { InfiniteScrollListPage } from "../../../pages/pokemon/InfiniteScrollListPage";
import { pokemonListInfiniteQueryOptions } from "../../../modules/pokemon/queries/queryOptions/pokemonListInfiniteQueryOptions";
import { queryClient } from "../../../utils/queryClient";
import { InfiniteQueryErrorPage } from "../../../pages/pokemon/InfiniteQueryErrorPage";
import { ListPageLoader } from "../../../modules/pokemon/ui/components/loaders/ListPageLoader";

export const Route = createFileRoute("/(pokemon)/_pokemon-list/infinite-scroll")({
  loader: async () => {
    queryClient.prefetchInfiniteQuery(pokemonListInfiniteQueryOptions());
    return queryClient.ensureInfiniteQueryData(pokemonListInfiniteQueryOptions());
  },
  component: () => <InfiniteScrollListPage />,
  pendingComponent: ListPageLoader,
  errorComponent: () => <InfiniteQueryErrorPage queryOptions={pokemonListInfiniteQueryOptions()} errorMessage="Failed to load Pokemon list" />,
});
