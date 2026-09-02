import { useState } from "react";
import { usePagination } from "./usePagination.ts";
import { useGetCollectionsQuery } from "../store/api/collectionsApi.ts";

export const useCollections = () => {
  const [totalCollectionsPages, setTotalCollectionsPages] = useState(1);
  const { currentPage, cardsOnPage } = usePagination(totalCollectionsPages);

  const {
    data: response,
    isError,
    isLoading: isCollectionsLoading,
  } = useGetCollectionsQuery({ currentPage, cardsOnPage });

  const [syncedCollectionsResponse, setSyncedCollectionsResponse] = useState(response);

  if (response !== syncedCollectionsResponse) {
    setSyncedCollectionsResponse(response);
    if (response) setTotalCollectionsPages(Math.ceil(response.total / response.limit));
  }

  return {
    collectionsData: response?.data ?? [],
    isCollectionsLoading,
    isError: isError,
    currentPage,
    totalCollectionsPages,
    cardsOnPage,
  };
};
