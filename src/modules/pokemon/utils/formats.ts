export const extractPokemonId = (url: string): number => {
  const matches = url.match(/\/pokemon\/(\d+)\//);
  return matches ? parseInt(matches[1], 10) : 0;
};

export const chunkArray = <T>(array: T[], chunkSize: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

export const extractNextPageOffset = (url: string): number | undefined => {
  const matches = url.match(/offset=(\d+)/);
  return matches ? parseInt(matches[1], 10) : undefined;
};

export const capitalizeText = (text: string): string => {
  if (!text || text.length === 0) {
    return text;
  }
  return text
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const formatNumberIntoSerial = (number: number, padStartCount: number): string => {
  return `#${number.toString().padStart(padStartCount, "0")}`;
};

export const formatPokemonHeight = (height: number): string => {
  return `${(height / 10).toFixed(1)} m`;
};

export const formatPokemonWeight = (weight: number): string => {
  return `${(weight / 10).toFixed(1)} kg`;
};

export const calculateStatPercentage = (baseStat: number, maxStat: number = 150): number => {
  return Math.min((baseStat / maxStat) * 100, 100);
};
