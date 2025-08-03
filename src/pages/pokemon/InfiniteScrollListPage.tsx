import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { PokemonGridView } from "../../modules/pokemon/ui/views/PokemonGridView";

export const InfiniteScrollListPage = () => {
  // const { data: pokemonListData, hasNextPage, isFetchingNextPage, fetchNextPage } = useSuspenseInfiniteQuery(pokemonListInfiniteQueryOptions());

  const pokemonChunks = [
    [
      { id: 1, name: "bulbasaur", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" },
      { id: 2, name: "ivysaur", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png" },
      { id: 3, name: "venusaur", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png" },
      { id: 4, name: "charmander", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" },
      { id: 5, name: "charmeleon", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png" },
      { id: 6, name: "charizard", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" },
      { id: 7, name: "squirtle", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" },
      { id: 8, name: "wartortle", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png" },
      { id: 9, name: "blastoise", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png" },
      { id: 10, name: "caterpie", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png" },
      { id: 11, name: "metapod", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png" },
      { id: 12, name: "butterfree", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png" },
      { id: 13, name: "weedle", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png" },
      { id: 14, name: "kakuna", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png" },
      { id: 15, name: "beedrill", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png" },
      { id: 16, name: "pidgey", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png" },
      { id: 17, name: "pidgeotto", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png" },
      { id: 18, name: "pidgeot", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png" },
      { id: 19, name: "rattata", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png" },
      { id: 20, name: "raticate", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png" },
    ],
    [
      { id: 1, name: "bulbasaur", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" },
      { id: 2, name: "ivysaur", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png" },
      { id: 3, name: "venusaur", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png" },
      { id: 4, name: "charmander", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" },
      { id: 5, name: "charmeleon", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png" },
      { id: 6, name: "charizard", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" },
      { id: 7, name: "squirtle", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" },
      { id: 8, name: "wartortle", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png" },
      { id: 9, name: "blastoise", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png" },
      { id: 10, name: "caterpie", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png" },
      { id: 11, name: "metapod", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png" },
      { id: 12, name: "butterfree", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png" },
      { id: 13, name: "weedle", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png" },
      { id: 14, name: "kakuna", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png" },
      { id: 15, name: "beedrill", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png" },
      { id: 16, name: "pidgey", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png" },
      { id: 17, name: "pidgeotto", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png" },
      { id: 18, name: "pidgeot", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png" },
      { id: 19, name: "rattata", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png" },
      { id: 20, name: "raticate", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png" },
    ],
  ];

  const virtualizer = useWindowVirtualizer({
    count: pokemonChunks.length || 0,
    estimateSize: () => 200,
  });

  const virtualItems = virtualizer.getVirtualItems();

  return (
    <div className="w-full overflow-auto h-min-screen scrollbar-hide">
      <div className="relative" style={{ height: `${virtualizer.getTotalSize()}px` }}>
        <div
          className="absolute top-0 left-0 w-full"
          style={{
            transform: `trnaslateY(${virtualItems[0]?.start || 0}px)`,
          }}
        >
          {virtualItems.map(({ index, key }) => (
            <div className="" key={key} data-index={index} ref={virtualizer.measureElement}>
              <PokemonGridView pokemons={pokemonChunks[index]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
