import type { PokemonCardProps } from "../../../../../types/modules/pokemon";
import { ImageLoader } from "../loaders/ImageLoader";

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <div>
        <ImageLoader
          src={pokemon.spriteUrl}
          alt={pokemon.name}
          className="w-full h-full object-contain"
          containerClassName="relative w-full h-full"
          loadingClassName="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse"
          errorClassName="absolute inset-0 flex flex-col items-center justify-center bg-gray-100"
          errorIcon="🎭"
          errorText="No image"
        />
      </div>

      <h3 className="text-center text-teal-600 font-bold text-3xl">Soon..</h3>
    </div>
  );
};
