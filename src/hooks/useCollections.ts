import {useState} from "react";
import {useFiltersContext} from "./useFiltersContext.ts";
import {getCollectionsItems} from "../api/getColletionsData.ts";
import {usePagination} from "./usePagination.ts";
import {useAsync} from "./useAsync.ts";

export const useCollections = () => {

  const { cardsOnPage } = useFiltersContext();

  const {
    specFilter,
    accessFilter,
    appliedSearch
  } = useFiltersContext();

  const [totalCollectionsPages, setTotalCollectionsPages] = useState(1);
  const { currentPage } = usePagination(totalCollectionsPages);

  const {
    data: response,
    isLoading: isCollectionsLoading,
    error,
  } = useAsync(
    (signal) => getCollectionsItems({
      currentPage,
      cardsOnPage,
      specFilter,
      accessFilter,
      appliedSearch,
      signal
    }), [
      currentPage,
      cardsOnPage,
      specFilter,
      accessFilter,
      appliedSearch
    ]
  )

  const [syncedCollectionsResponse, setSyncedCollectionsResponse] = useState(response);

  if(response !== syncedCollectionsResponse) {
    setSyncedCollectionsResponse(response);
    if (response) setTotalCollectionsPages(Math.ceil(response.total / response.limit));
  }

  return {
    collectionsData: response?.data ?? [],
    isCollectionsLoading,
    errorMessage: error,
    currentPage,
    totalCollectionsPages,
    cardsOnPage,
  }
}