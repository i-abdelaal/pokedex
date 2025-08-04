import { PokemonListPaginationDefaultValues } from "../../../modules/pokemon/constants";
import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import clsx from "clsx";

export const Route = createFileRoute("/(pokemon)/_pokemon-list")({
  component: PokemonListLayout,
});

function PokemonListLayout() {
  const { pathname } = useLocation();
  const isInfiniteScroll = pathname.includes("infinite-scroll");
  const basicClassName = "px-4 py-2 rounded shadow-sm";
  const inActiveLinkClassName = "bg-white text-black hover:bg-gray-200";
  const activeLinkClassName = "!bg-black text-white hover:bg-gray-700";
  return (
    <div className={clsx(isInfiniteScroll ? "bg-gradient-to-tl from-emerald-100 to-emerald-50" : "bg-gradient-to-tl from-blue-100 to-blue-50", "min-h-screen p-4")}>
      <div className="w-full bg-app-background-mint flex items-start justify-center">
        <h1 className="text-4xl font-app font-bold text-app-text-primary mb-4">⚡Pokédex</h1>
      </div>
      <p className="text-center my-4">{`Discover and explore Pokemon with ${isInfiniteScroll ? "infinite scroll" : "page controls"}`}</p>
      <div className="flex gap-4 justify-center items-center">
        <Link className={clsx(basicClassName, inActiveLinkClassName)} activeProps={{ className: activeLinkClassName }} to="/" search={{ page: PokemonListPaginationDefaultValues.PAGE_NUMBER }}>
          Page Controls
        </Link>
        <Link className={clsx(basicClassName, inActiveLinkClassName)} activeProps={{ className: activeLinkClassName }} to="/infinite-scroll">
          Infinite Scroll
        </Link>
      </div>
      <div className="w-[80dvw] mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
