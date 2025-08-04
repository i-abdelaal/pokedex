import { createFileRoute } from "@tanstack/react-router";
import { PokemonDetailsPage } from "../../pages/pokemon/PokemonDetailsPage";

export const Route = createFileRoute("/(pokemon)/pokemon-details/$id")({
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
