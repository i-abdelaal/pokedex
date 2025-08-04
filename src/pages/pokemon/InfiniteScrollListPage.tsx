import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { pokemonListInfiniteQueryOptions } from "../../modules/pokemon/queries/queryOptions/pokemonListInfiniteQueryOptions";
import { PokemonGridView } from "../../modules/pokemon/ui/views/PokemonGridView";
import { Button } from "../../ui/components/Button";
import { Spinner } from "../../ui/components/Spinner";

export const InfiniteScrollListPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { data: pokemonListData, hasNextPage, isFetchingNextPage, fetchNextPage } = useSuspenseInfiniteQuery(pokemonListInfiniteQueryOptions());

  const handleLoadMore = () => {
    fetchNextPage();
  };

  const pokemonChunks = pokemonListData.data || [];

  const virtualizer = useVirtualizer({
    count: pokemonChunks.length || 0,
    estimateSize: () => 200,
    getScrollElement: () => scrollRef.current,
  });

  const virtualItems = virtualizer.getVirtualItems();

  return (
    <div ref={scrollRef} className="w-full overflow-auto h-min-screen scrollbar-hide">
      <div className="relative" style={{ height: `${virtualizer.getTotalSize()}px` }}>
        <div
          className="absolute top-0 left-0 w-full"
          style={{
            transform: `trnaslateY(${virtualItems?.[0]?.start || 0}px)`,
          }}
        >
          {virtualItems.map(({ index, key }) => (
            <div className="" key={key} data-index={index} ref={virtualizer.measureElement}>
              <PokemonGridView pokemons={pokemonChunks[index] || []} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        {hasNextPage && !isFetchingNextPage && (
          <Button variant="primary" color="primary" size="large" className="rounded-lg border-none shadow-md px-4 my-6" onClick={handleLoadMore}>
            Load more
          </Button>
        )}
        {isFetchingNextPage && (
          <>
            <Spinner size="md" />
            <p className="text-center text-sm">Loading more Pokmon..</p>
          </>
        )}
      </div>
      <div className="flex justify-center items-center my-6">
        <p className="text-center text-sm">{`Showing ${pokemonListData.data.reduce((acc, curr) => acc + curr.length, 0)} Pokemon`}</p>
      </div>
    </div>
  );
};
