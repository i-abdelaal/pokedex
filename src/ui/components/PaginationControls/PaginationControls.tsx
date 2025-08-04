import clsx from "clsx";
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
  const basicControlStyle = "rounded-md border-none mx-1 text-sm font-bold";
  const inActiveControlStyle = "bg-white text-black";
  const activeControlStyle = "bg-black text-white";
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
      <div className="flex items-center space-x-1">
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={() => onPageChange && onPageChange(currentPage - 1)}
          onMouseEnter={() => onPageHover && onPageHover(currentPage - 1)}
          disabled={!totalPageCount || currentPage === 1 || !hasPrevious}
          className={clsx(basicControlStyle, inActiveControlStyle)}
        >
          <span className="text-sm flex justify-center items-center gap-2">
            <span className="icon-chevron-left" />
            <p>Previous</p>
          </span>
        </Button>
        <Button
          variant="primary"
          color="primary"
          size="small"
          className={clsx(basicControlStyle, inActiveControlStyle, "sm:hidden")}
          onClick={() => onPageChange && onPageChange(currentPage)}
          onMouseEnter={() => onPageHover && onPageHover(currentPage)}
        >
          {currentPage}
        </Button>

        <div className="hidden sm:flex items-center space-x-1">
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
                onClick={() => !isCurrentPage && onPageChange && onPageChange(pageNum)}
                onMouseEnter={() => !isCurrentPage && onPageHover && onPageHover(pageNum)}
                className={clsx(basicControlStyle, isCurrentPage ? activeControlStyle : inActiveControlStyle)}
              >
                {pageNum}
              </Button>
            );
          })}
        </div>

        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={() => onPageChange && onPageChange(currentPage + 1)}
          onMouseEnter={() => onPageHover && onPageHover(currentPage + 1)}
          disabled={!totalPageCount || currentPage === totalPageCount || !hasNext}
          className={clsx(basicControlStyle, inActiveControlStyle)}
        >
          <span className=" flex justify-center items-center gap-2">
            <p>Next</p> <span className="icon-chevron-right" />
          </span>
        </Button>
      </div>

      <div className="text-sm text-gray-600">
        Page {currentPage} of {totalPageCount}
        {itemsPerPage && <span className="ml-1">({itemsPerPage})</span>}
      </div>
    </div>
  );
};
