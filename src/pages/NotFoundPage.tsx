import { PokemonListPaginationDefaultValues } from "../modules/pokemon/constants";
import { useNavigate } from "@tanstack/react-router";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate({ to: "/", search: { page: PokemonListPaginationDefaultValues.PAGE_NUMBER } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-gray-50">
      <div className="max-w-md mx-auto">
        {/* 404 Icon */}
        <div className="mb-6">
          <svg className="w-24 h-24 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.007-5.691-2.709M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <h1 className="text-6xl font-bold text-gray-800 mb-2">404</h1>
        </div>

        {/* Go Back Button */}
        <button
          onClick={handleGoBack}
          className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-lg hover:black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
        >
          <span className="icon-arrow-left mr-2" />
          Go Back Home
        </button>
      </div>
    </div>
  );
};
