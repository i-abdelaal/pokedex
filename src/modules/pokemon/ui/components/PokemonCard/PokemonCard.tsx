import type { PokemonCardProps } from "../../../../../types/modules/pokemon";
import { getPokemonTypeColor } from "../../../utils/getPokemonTypeColor";
import { formatNumberIntoSerial, formatPokemonHeight, formatPokemonWeight, calculateStatPercentage } from "../../../utils/formats";
import { ImageLoader } from "../loaders/ImageLoader";
import { getPokemonStatDisplayName } from "../../../utils/getPokemonStatDisplayName";

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const primaryType = pokemon.types[0] || "normal";
  const gradientClass = getPokemonTypeColor(primaryType);

  return (
    <div className={`relative w-full max-w-md mx-auto bg-gradient-to-br ${gradientClass} rounded-3xl shadow-2xl overflow-hidden`}>
      {/* Header */}
      <div className="relative p-6 pb-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl font-bold text-white capitalize">✨ {pokemon.name}</h1>
            <p className="text-white/80 text-sm font-medium">{formatNumberIntoSerial(pokemon.id, 3)}</p>
          </div>
          <div className="flex gap-2">
            {pokemon.types.map((type, index) => (
              <span key={index} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium capitalize">
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Pokemon Image */}
        <div className="flex justify-center mb-4">
          <ImageLoader src={pokemon.spriteUrl} alt={pokemon.name} className="w-32 h-32 object-contain drop-shadow-2xl" containerClassName="relative w-32 h-32" />
        </div>
      </div>

      {/* Card Content */}
      <div className="bg-white rounded-t-3xl p-6 space-y-6">
        {/* Physical Stats */}
        <div className="flex justify-between items-center">
          <div className="text-center">
            <p className="text-gray-500 text-sm font-medium">📏 Height</p>
            <p className="text-lg font-bold text-gray-800">{formatPokemonHeight(pokemon.height)}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-500 text-sm font-medium">⚖️ Weight</p>
            <p className="text-lg font-bold text-gray-800">{formatPokemonWeight(pokemon.weight)}</p>
          </div>
        </div>

        {/* Base Stats */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Base Stats</h3>
          <div className="space-y-3">
            {pokemon.stats.map((stat, index) => {
              const percentage = calculateStatPercentage(stat.baseStat);
              return (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-20 text-sm font-medium text-gray-600 text-right">{getPokemonStatDisplayName(stat.name)}</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2 relative overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${gradientClass} transition-all duration-500 ease-out`} style={{ width: `${percentage}%` }} />
                  </div>
                  <div className="w-8 text-sm font-bold text-gray-800 text-right">{stat.baseStat}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Abilities */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-3">Abilities</h3>
          <div className="flex flex-wrap gap-2">
            {pokemon.abilities.map((ability, index) => (
              <span
                key={index}
                className={`px-3 py-2 rounded-lg text-sm font-medium capitalize ${
                  ability.isHidden ? "bg-gray-100 text-gray-600 border border-dashed border-gray-300" : `bg-gradient-to-r ${gradientClass} text-white`
                }`}
              >
                {ability.name.replace("-", " ")}
                {ability.isHidden && " (Hidden)"}
              </span>
            ))}
          </div>
        </div>

        {/* Base Experience */}
        <div className="bg-gray-50 rounded-xl p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Base Experience</h3>
          <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{pokemon.baseExperience} XP</p>
        </div>
      </div>
    </div>
  );
};
