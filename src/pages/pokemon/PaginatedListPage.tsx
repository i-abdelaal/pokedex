import { getRouteApi } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { pokemonListQueryOptions } from "../../modules/pokemon/queries/queryOptions/pokemonListQueryOptions";
import { PokemonListPaginationDefaultValues } from "../../modules/pokemon/constants";
import { queryClient } from "../../utils/queryClient";
import { PokemonGridView } from "../../modules/pokemon/ui/views/PokemonGridView";
import { PaginationControls } from "../../ui/components/PaginationControls";

export const PaginatedListPage = () => {
  const routeApi = getRouteApi("/(pokemon)/_pokemon-list/");
  const search = routeApi.useSearch();
  const navigate = routeApi.useNavigate();

  const { data: pokemonListData } = useSuspenseQuery(
    pokemonListQueryOptions({
      pageNumber: !isNaN(Number(search.page)) && Number(search.page) > 0 ? Number(search.page) : PokemonListPaginationDefaultValues.PAGE_NUMBER,
    })
  );

  const pageCount = Math.ceil((pokemonListData?.count || 0) / PokemonListPaginationDefaultValues.LIMIT);

  const currentPage = search.page ? Number(search.page) : PokemonListPaginationDefaultValues.PAGE_NUMBER;

  const handlePageChange = (page: number) => {
    navigate({
      search: { page },
    });
  };

  const handlePageHover = (page: number) => {
    queryClient.prefetchQuery(
      pokemonListQueryOptions({
        pageNumber: page,
      })
    );
  };
  return (
    <>
      <PokemonGridView pokemons={pokemonListData?.data || []} />
      <PaginationControls
        currentPage={currentPage}
        totalPageCount={pageCount}
        hasNext={Boolean(pokemonListData.next)}
        hasPrevious={Boolean(pokemonListData.previous)}
        onPageChange={handlePageChange}
        onPageHover={handlePageHover}
        itemsPerPage={`${pokemonListData?.data.length || 0} Pokemons shown`}
      />
    </>
  );
};
