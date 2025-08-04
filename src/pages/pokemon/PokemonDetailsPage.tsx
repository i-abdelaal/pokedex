import { useSuspenseQuery } from "@tanstack/react-query";
import { getRouteApi, useRouter } from "@tanstack/react-router";
import { pokemonDetailsQueryOptions } from "../../modules/pokemon/queries/queryOptions/pokemonDetailsQueryOptions";
import { Button } from "../../ui/components/Button";
export const PokemonDetailsPage = () => {
  const routeApi = getRouteApi("/(pokemon)/pokemon-details/$id");
  const { id } = routeApi.useLoaderData();
  const { data } = useSuspenseQuery(pokemonDetailsQueryOptions({ pokemonId: Number(id) }));
  const router = useRouter();

  const handleBackToList = () => {
    router.history.back();
  };
  return (
    <div className="bg-gradient-to-tl from-pink-100 to-violet-100 min-h-screen p-4">
      <Button variant="outlined" color="primary" size="small" className="bg-white text-black border-none rounded-md border-none mx-1 text-sm font-bold" onClick={handleBackToList}>
        <span className="text-sm flex justify-center items-center gap-2">
          <span className="icon-arrow-left" />
          <p>Back to list</p>
        </span>
      </Button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
