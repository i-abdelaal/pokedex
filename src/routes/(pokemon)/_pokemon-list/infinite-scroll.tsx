import { createFileRoute } from "@tanstack/react-router";
import { InfiniteScrollListPage } from "../../../pages/pokemon/InfiniteScrollListPage";

export const Route = createFileRoute("/(pokemon)/_pokemon-list/infinite-scroll")({
  component: InfiniteScrollListPage,
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: () => <div>Error loading Pokemon list</div>,
});
