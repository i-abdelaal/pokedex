export const buttonTheme = {
  // Base classes applied to all buttons
  base: "rounded cursor-pointer font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",

  // Size variants
  sizes: {
    small: "px-3 py-1.5 text-sm",
    medium: "px-5 py-2.5 text-base",
    large: "px-6 py-3 text-lg",
  },

  // Variant and color combinations (based on project design)
  variants: {
    primary: {
      default: "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500", // Dark button like "Page Controls"
      primary: "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-400", // Light button like "Infinite Scroll"
    },
    outlined: {
      default: "bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-500 border border-gray-300",
      primary: "bg-transparent text-gray-900 hover:bg-gray-50 focus:ring-gray-500 border border-gray-900",
      secondary: "bg-transparent text-gray-600 hover:bg-gray-50 focus:ring-gray-400 border border-gray-300",
    },
    text: {
      default: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
      primary: "bg-transparent text-gray-900 hover:bg-gray-100 focus:ring-gray-500",
      secondary: "bg-transparent text-gray-600 hover:bg-gray-50 focus:ring-gray-400",
    },
  },

  // Width modifiers
  width: {
    auto: "",
    full: "w-full",
  },
} as const;

// Type helpers for better TypeScript support
export type ButtonVariant = keyof typeof buttonTheme.variants;
export type ButtonColor = keyof typeof buttonTheme.variants.primary;
export type ButtonSize = keyof typeof buttonTheme.sizes;
