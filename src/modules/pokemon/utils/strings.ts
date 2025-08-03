export const extractPokemonId = (url: string): number => {
  const matches = url.match(/\/pokemon\/(\d+)\//);
  return matches ? parseInt(matches[1], 10) : 0;
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
