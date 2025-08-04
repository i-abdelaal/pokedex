import { createFileRoute } from "@tanstack/react-router";
import { PokemonDetailsPage } from "../../pages/pokemon/PokemonDetailsPage";
import { pokemonDetailsQueryOptions } from "../../modules/pokemon/queries/queryOptions/pokemonDetailsQueryOptions";
import { queryClient } from "../../utils/queryClient";

export const Route = createFileRoute("/(pokemon)/pokemon-details/$id")({
  loader: async ({ params: { id } }) => {
    await queryClient.prefetchQuery(pokemonDetailsQueryOptions({ pokemonId: Number(id) }));
    return queryClient.ensureQueryData(pokemonDetailsQueryOptions({ pokemonId: Number(id) }));
  },
  component: PokemonDetailsPage,
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: () => <div>Error loading Pokemon details</div>,
  notFoundComponent: () => {
    return (
      <div>
        <p>This is the notFoundComponent configured on root route</p>
      </div>
    );
  },
});
