export const getPokemonTypeColor = (type: string): string => {
  const typeColors: Record<string, string> = {
    fire: "from-red-400 to-orange-500",
    water: "from-blue-400 to-blue-600",
    grass: "from-green-400 to-green-600",
    electric: "from-yellow-400 to-yellow-500",
    psychic: "from-pink-400 to-purple-500",
    ice: "from-blue-200 to-blue-400",
    dragon: "from-purple-500 to-indigo-600",
    dark: "from-gray-600 to-gray-800",
    fairy: "from-pink-300 to-pink-500",
    fighting: "from-red-600 to-red-800",
    poison: "from-purple-400 to-purple-600",
    ground: "from-yellow-600 to-brown-500",
    flying: "from-blue-300 to-indigo-400",
    bug: "from-green-500 to-green-700",
    rock: "from-yellow-700 to-gray-600",
    ghost: "from-purple-600 to-indigo-800",
    steel: "from-gray-400 to-gray-600",
    normal: "from-gray-300 to-gray-500",
  };
  return typeColors[type.toLowerCase()] || "from-purple-400 to-pink-500";
};
