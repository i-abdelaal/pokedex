import { createFileRoute } from "@tanstack/react-router";
import { PokemonDetailsPage } from "../../pages/pokemon/PokemonDetailsPage";
import { pokemonDetailsQueryOptions } from "../../modules/pokemon/queries/queryOptions/pokemonDetailsQueryOptions";
import { queryClient } from "../../utils/queryClient";
// import { QueryErrorPage } from "../../pages/pokemon/QueryErrorPage"; // TODO: Debug Eslint error while it's working on runtime
import { NotFoundPage } from "../../pages/NotFoundPage";
import { PageLoader } from "../../ui/components/PageLoader";

export const Route = createFileRoute("/(pokemon)/pokemon-details/$id")({
  loader: async ({ params: { id } }) => {
    await queryClient.prefetchQuery(pokemonDetailsQueryOptions({ pokemonId: Number(id) }));
    return queryClient.ensureQueryData(pokemonDetailsQueryOptions({ pokemonId: Number(id) }));
  },
  component: PokemonDetailsPage,
  pendingComponent: PageLoader,
  // errorComponent: () => <QueryErrorPage queryOptions={pokemonDetailsQueryOptions({ pokemonId: Number(Route.useParams().id) })} errorMessage="Failed to load Pokemon details" />,
  errorComponent: () => <p className="text-red-500">Error loading data</p>,
  notFoundComponent: NotFoundPage,
});
