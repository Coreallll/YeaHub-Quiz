import {useEffect, useState} from "react";

interface UsePaginationParams {
  totalPages: number;
  initialPage?: number;
}

export function usePagination({
  totalPages,
  initialPage = 1,
}: UsePaginationParams) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  function handleNextPage() {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  }

  function handlePrevPage() {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  }

  function handlePageClick(pageNumber: number) {
    setCurrentPage(Math.min(Math.max(pageNumber, 1), totalPages));
  }

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return {
    currentPage,
    setCurrentPage,
    handleNextPage,
    handlePrevPage,
    handlePageClick,
  };
}