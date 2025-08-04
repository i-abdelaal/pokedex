import Skeleton from "react-loading-skeleton";

export const ListPageLoader = () => (
  <div className="container mx-auto px-4 py-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="block">
          <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow duration-200 flex flex-col items-center text-center">
            <div className="w-full min-w-24 h-80 mb-3 flex items-center justify-center bg-gray-50 rounded">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="w-full flex flex-col items-center">
              <div className="mb-1">
                <Skeleton height={28} width={150} />
              </div>
              <div>
                <Skeleton height={24} width={60} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
