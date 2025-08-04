# Pokemon Pokedex Application

A modern, responsive Pokemon Pokedex application built with React and TypeScript. This application allows users to browse, search, and view detailed information about Pokemon using the PokeAPI.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
npm install
npm run dev
```

The application will be available at `http://localhost:3000`

## 🏗️ Architecture Overview

This application follows a **3-layer architecture** pattern, promoting separation of concerns and maintainability:

### 1. Data Access Layer (API & Queries)
**Location**: `src/api/` and `src/modules/pokemon/queries/`

This layer handles all external data fetching and API interactions:
- **API Endpoints** (`src/api/pokemonEndPoints.ts`): Defines Pokemon API endpoints and HTTP client configuration
- **React Query Hooks** (`src/modules/pokemon/queries/`): Custom hooks that encapsulate data fetching logic using TanStack Query
- **Data Transformation**: Raw API responses are transformed into application-specific data structures
- **Caching & State Management**: TanStack Query handles server state, caching, and background updates

**Key Features**:
- Infinite scrolling for Pokemon lists
- Individual Pokemon detail fetching
- Error handling and retry mechanisms
- Optimistic updates and background refetching

### 2. Business Logic Layer (Utils & Modules)
**Location**: `src/modules/pokemon/utils/` and `src/utils/`

This layer contains the core business logic and data processing:
- **Pokemon Utilities** (`src/modules/pokemon/utils/`): Pokemon-specific business logic like type calculations, stat processing, and data formatting
- **General Utilities** (`src/utils/`): Reusable utility functions for common operations
- **Constants** (`src/modules/pokemon/constants.ts`): Application constants and configuration
- **Type Definitions** (`src/types/`): TypeScript interfaces and types for type safety

**Key Features**:
- Pokemon type-based styling and theming
- Stat calculations and formatting
- Search and filtering logic
- Data validation and transformation

### 3. Presentation Layer (UI Components & Pages)
**Location**: `src/modules/pokemon/ui/`, `src/pages/`, `src/ui/`, and `src/routes/`

This layer handles user interface and user interactions:
- **Pages** (`src/pages/`): Top-level page components that compose the application views
- **UI Components** (`src/modules/pokemon/ui/` and `src/ui/`): Reusable UI components with specific responsibilities
- **Routes** (`src/routes/`): Route definitions and navigation structure
- **Styling**: Tailwind CSS for responsive and modern styling

**Key Components**:
- **PokemonCard**: Displays individual Pokemon with stats, abilities, and type-based styling
- **ImageLoader**: Reusable image loading component with loading and error states
- **Error Pages**: Generic and infinite query error handling components
- **Loading States**: Skeleton loaders and loading indicators

## 🛠️ Tech Stack & Libraries

### Core Framework
- **React 19.0.0** - Modern React with latest features and performance improvements
- **TypeScript** - Type safety and enhanced developer experience
- **Vite 4.3.4** - Fast build tool and development server

### Routing & Navigation
- **@tanstack/react-router 1.130.2** - Type-safe routing with file-based routing
- **@tanstack/react-router-devtools 1.130.2** - Development tools for debugging routes
- **@tanstack/router-plugin 1.121.2** - Vite plugin for route generation

### State Management & Data Fetching
- **@tanstack/react-query 5.84.1** - Powerful data synchronization for React
- **axios 1.11.0** - HTTP client for API requests
- **@tanstack/react-virtual 3.13.12** - Virtualization for large lists (infinite scrolling)

### UI & Styling
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **clsx 2.1.1** - Utility for constructing className strings conditionally
- **react-loading-skeleton 3.5.0** - Loading skeleton components

### Development Tools
- **ESLint 9.32.0** - Code linting with multiple plugins:
  - `@tanstack/eslint-plugin-query` - React Query specific linting
  - `eslint-plugin-react-hooks` - React Hooks linting
  - `eslint-plugin-jsx-a11y` - Accessibility linting
- **Prettier 5.5.3** - Code formatting
- **Husky 9.1.7** - Git hooks for code quality

### Testing
- **Vitest** - Fast unit testing framework
- **@testing-library/react 16.2.0** - React testing utilities
- **@testing-library/dom 10.4.0** - DOM testing utilities

### Build & Deployment
- **@vitejs/plugin-react 4.3.4** - Vite plugin for React
- **autoprefixer 10.4.21** - CSS vendor prefixing
- **postcss** - CSS processing

## 📁 Project Structure

```
src/
├── api/                     # Data Access Layer
│   └── pokemonEndPoints.ts   # API endpoints and HTTP client
├── modules/
│   └── pokemon/             # Pokemon module
│       ├── queries/         # React Query hooks (Data Access)
│       ├── utils/           # Business logic utilities
│       ├── ui/              # Pokemon-specific UI components
│       └── constants.ts     # Pokemon constants
├── pages/                   # Page components (Presentation)
├── routes/                  # Route definitions (Presentation)
├── ui/                      # Shared UI components (Presentation)
├── utils/                   # General utilities (Business Logic)
├── types/                   # TypeScript type definitions
└── main.tsx                 # Application entry point
```

## 🎯 Key Features

- **Infinite Scrolling**: Browse through all Pokemon with smooth infinite scrolling
- **Detailed Pokemon Cards**: View comprehensive Pokemon information including stats, abilities, and types
- **Type-based Theming**: Dynamic styling based on Pokemon types
- **Error Handling**: Robust error handling with retry mechanisms
- **Loading States**: Smooth loading experiences with skeleton components
- **Responsive Design**: Mobile-first responsive design
- **Type Safety**: Full TypeScript support for better development experience
- **Performance Optimized**: Virtual scrolling and optimized rendering

## 🔧 Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production
- `npm run serve` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Lint code
- `npm run lint:fix` - Fix linting issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🌐 API

This application uses the [PokeAPI](https://pokeapi.co/) to fetch Pokemon data. The API provides comprehensive information about Pokemon including:
- Basic information (name, ID, sprites)
- Stats and abilities
- Types and type relationships
- Physical characteristics

## 🤝 Contributing

1. Follow the established architecture patterns
2. Maintain separation of concerns across the three layers
3. Use TypeScript for type safety
4. Follow the existing code style and formatting
5. Add tests for new functionality
6. Update documentation as needed