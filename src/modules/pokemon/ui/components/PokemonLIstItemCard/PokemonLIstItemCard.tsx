import { Link } from "@tanstack/react-router";
import type { PokemonListItemCardProps } from "../../../../../types/modules/pokemon";
import { capitalizeText, formatNumberIntoSerial } from "../../../utils/strings";

export const PokemonLIstItemCard = ({ pokemon }: PokemonListItemCardProps) => {
  return (
    <Link to="/pokemon-details/$id" params={{ id: pokemon.id.toString() }} className="block">
      <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow duration-200 flex flex-col items-center text-center">
        <div className="w-full min-w-24 max-h-80 mb-3 flex items-center justify-center bg-gray-50">
          <img src={pokemon.spriteUrl} alt={pokemon.name} className="w-full h-full object-contain" loading="lazy" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-1">{capitalizeText(pokemon.name)}</h3>
        <p className="text-lg text-gray-500 font-medium">{formatNumberIntoSerial(pokemon.id, 3)}</p>
      </div>
    </Link>
  );
};
