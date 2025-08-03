/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // App theme colors
        app: {
          primary: '#fbbf24',     // Yellow/gold for title and accents
          secondary: '#f59e0b',   // Darker yellow for hover states
          background: '#f8fafc',  // Light background
          'background-alt': '#f1f5f9', // Slightly darker background
          'background-mint': '#f0fdfa', // Light mint green background
          'background-mint-alt': '#ccfbf1', // Slightly darker mint background
          surface: '#ffffff',     // Card/surface backgrounds
          text: {
            primary: '#111827',   // Dark text
            secondary: '#6b7280', // Medium gray text
            muted: '#9ca3af',     // Light gray text
          },
          border: '#e5e7eb',      // Light border color
        },
        card: {
          // Detail card specific colors
          'gradient-start': '#8b5cf6', // Purple gradient start
          'gradient-end': '#ec4899',   // Pink gradient end
          'progress-bar': '#374151',   // Dark gray for progress bars
          'progress-bg': '#f3f4f6',    // Light gray for progress backgrounds
          'accent': '#8b5cf6',         // Purple for accent text
          'type-accent': '#ef4444',    // Red for type indicators
          'detail-bg': '#fef7ff',      // Very light background for detail areas
        },
      },
      fontFamily: {
        'app': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'list-item': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'list-item-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'detail-card': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'card': '12px',
      },
      spacing: {
        'grid-gap': '1.5rem',
      },
    },
  },
  plugins: [],
}
