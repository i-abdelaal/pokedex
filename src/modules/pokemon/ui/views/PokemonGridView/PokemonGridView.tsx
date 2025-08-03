import type { PokemonListItem } from "@/types/modules/pokemon";
import { PokemonLIstItemCard } from "../../components/PokemonLIstItemCard";

export const PokemonGridView = ({ pokemons }: { pokemons: PokemonListItem[] }) => {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-6">
        {pokemons.map(pokemon => (
          <div key={pokemon.id} className="flex justify-center">
            <PokemonLIstItemCard pokemon={pokemon} />
          </div>
        ))}
      </div>
    </div>
  );
};
