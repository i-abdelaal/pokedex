import { Button } from "../Button";

export type PaginationControlsProps = {
  totalPageCount: number;
  currentPage: number;
  hasNext: boolean;
  hasPrevious: boolean;
  onPageChange?: (page: number) => void;
  onPageHover?: (page: number) => void;
  itemsPerPage?: string;
};

export const PaginationControls = ({ totalPageCount, currentPage, hasNext, hasPrevious, onPageChange, onPageHover, itemsPerPage }: PaginationControlsProps) => {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPageCount <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPageCount; i++) {
        pages.push(i);
      }
    } else {
      // Show first few pages, ellipsis, and last page
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPageCount, startPage + maxVisiblePages - 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Add ellipsis and last page if needed
      if (endPage < totalPageCount) {
        if (endPage < totalPageCount - 1) {
          pages.push("...");
        }
        pages.push(totalPageCount);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Pagination buttons */}
      <div className="flex items-center space-x-1">
        {/* Previous button */}
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={() => onPageChange && onPageChange(currentPage - 1)}
          onMouseEnter={() => onPageHover && onPageHover(currentPage - 1)}
          disabled={!totalPageCount || currentPage === 1 || !hasPrevious}
          className="h-[40px] rounded-md"
        >
          <span className="text-sm flex items-center gap-2">
            <span className="icon-chevron-left" />
            <p>Previous</p>
          </span>
        </Button>

        {/* Page numbers */}
        {pageNumbers.map((page, index) => {
          if (page === "...") {
            return (
              <span key={`ellipsis-${index}`} className="px-2 py-2 text-gray-500">
                ...
              </span>
            );
          }

          const pageNum = page as number;
          const isCurrentPage = pageNum === currentPage;

          return (
            <Button
              key={pageNum}
              variant={isCurrentPage ? "primary" : "outlined"}
              color="primary"
              size="small"
              onClick={() => onPageChange && onPageChange(pageNum)}
              onMouseEnter={() => onPageHover && onPageHover(pageNum)}
              className="min-w-[40px] h-[40px] rounded-md"
            >
              {pageNum}
            </Button>
          );
        })}

        {/* Next button */}
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={() => onPageChange && onPageChange(currentPage + 1)}
          onMouseEnter={() => onPageHover && onPageHover(currentPage + 1)}
          disabled={!totalPageCount || currentPage === totalPageCount || !hasNext}
          className="h-[40px] rounded-md"
        >
          <span className="text-sm flex items-center gap-2">
            <p>Next</p> <span className="icon-chevron-right" />
          </span>
        </Button>
      </div>

      {/* Page info */}
      <div className="text-sm text-gray-600">
        Page {currentPage} of {totalPageCount}
        {itemsPerPage && <span className="ml-1">({itemsPerPage} Pokemon shown)</span>}
      </div>
    </div>
  );
};
