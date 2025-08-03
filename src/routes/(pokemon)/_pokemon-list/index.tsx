import { createFileRoute } from "@tanstack/react-router";
import { PaginatedListPage } from "../../../pages/pokemon/PaginatedListPage";

export const Route = createFileRoute("/(pokemon)/_pokemon-list/")({
  component: PaginatedListPage,
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: () => <div>Error loading Pokemon list</div>,
});
