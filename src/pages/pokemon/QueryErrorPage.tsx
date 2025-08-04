import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

interface QueryErrorPageProps<TQueryFnData = unknown, TError = Error, TData = TQueryFnData, TQueryKey extends readonly unknown[] = readonly unknown[]> {
  queryOptions: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>;
  errorMessage?: string;
  retryButtonText?: string;
  error?: TError;
}

export function QueryErrorPage<TQueryFnData = unknown, TError = Error, TData = TQueryFnData, TQueryKey extends readonly unknown[] = readonly unknown[]>({
  queryOptions,
  errorMessage = "Error while fetching data",
  retryButtonText = "Retry",
  error,
}: QueryErrorPageProps<TQueryFnData, TError, TData, TQueryKey>) {
  const { refetch } = useQuery(queryOptions);
  const handleRetry = () => {
    refetch();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] p-6 text-center">
      <div className="mb-4">
        <svg className="w-12 h-12 text-red-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
          />
        </svg>
        <p className="text-gray-700 text-lg font-medium">{errorMessage}</p>
        {error && <p className="text-gray-500 text-sm mt-2">{error instanceof Error ? error.message : String(error)}</p>}
      </div>
      <button
        onClick={handleRetry}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium"
      >
        {retryButtonText}
      </button>
    </div>
  );
}

// Type-safe wrapper functions for common use cases
export const createQueryErrorPage = <TQueryFnData, TError = Error, TData = TQueryFnData, TQueryKey extends readonly unknown[] = readonly unknown[]>(
  queryOptions: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>
) => {
  return (props?: Omit<QueryErrorPageProps<TQueryFnData, TError, TData, TQueryKey>, "queryOptions">) => <QueryErrorPage queryOptions={queryOptions} {...props} />;
};
