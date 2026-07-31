import {useCallback, useEffect} from "react";
import {useFiltersContext} from "./useFiltersContext.ts";


export function usePagination(totalPages: number) {
  const { searchParams, setSearchParams } = useFiltersContext();
  const pageFromParams = Number(searchParams.get("page") ?? 1);
  const currentPage = Number.isInteger(pageFromParams) && pageFromParams > 0
    ? pageFromParams
    : 1;

  const changePage = useCallback((page: number) => {
    const lastPage = Math.max(totalPages, 1);
    const nextPage = Math.min(Math.max(page, 1), lastPage);

    setSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams);

      params.set("page", String(nextPage));
      return params;
    });
  }, [totalPages, setSearchParams]);


  function handleNextPage() {
    changePage(currentPage + 1);
  }

  function handlePrevPage() {
    changePage(currentPage - 1);
  }

  function handlePageClick(pageNumber: number) {
    changePage(pageNumber);
  }

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      changePage(totalPages);
    }
  }, [currentPage, totalPages, changePage]);

  return {
    currentPage,
    handleNextPage,
    handlePrevPage,
    handlePageClick,
  };
}