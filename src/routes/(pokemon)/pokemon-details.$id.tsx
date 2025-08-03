import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(pokemon)/pokemon-details/$id")({
  component: PokemonDetails,
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

function PokemonDetails() {
  return <div>PokemonDetails</div>;
}
