import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(pokemon)/_pokemon-list/infinite-scroll")({
  component: PokemonListWithInfiniteScroll,
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: () => <div>Error loading Pokemon list</div>,
});

function PokemonListWithInfiniteScroll() {
  return <div>PokemonListWithInfiniteScroll</div>;
}
