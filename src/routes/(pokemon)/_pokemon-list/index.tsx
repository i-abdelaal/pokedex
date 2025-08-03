import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(pokemon)/_pokemon-list/")({
  component: PokemonListWithPaginationControls,
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: () => <div>Error loading Pokemon list</div>,
});

function PokemonListWithPaginationControls() {
  return <div>PokemonListWithPaginationControls</div>;
}
