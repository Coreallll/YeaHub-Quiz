import {useEffect} from "react";
import {useFiltersContext} from "./useFiltersContext.ts";


export function usePagination(totalPages: number) {
  const { searchParams, setSearchParams } = useFiltersContext();
  const pageFromParams = Number(searchParams.get("page") ?? 1);
  const currentPage = Number.isInteger(pageFromParams) && pageFromParams > 0
    ? pageFromParams
    : 1;

  function setPage(page: number) {
    const lastPage = Math.max(totalPages, 1);
    const nextPage = Math.min(Math.max(page, 1), lastPage);

    setSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams);

      params.set("page", String(nextPage));
      return params;
    });
  }


  function handleNextPage() {
    setPage(currentPage + 1);
  }

  function handlePrevPage() {
    setPage(currentPage - 1);
  }

  function handlePageClick(pageNumber: number) {
    setPage(pageNumber);
  }

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return {
    currentPage,
    handleNextPage,
    handlePrevPage,
    handlePageClick,
  };
}