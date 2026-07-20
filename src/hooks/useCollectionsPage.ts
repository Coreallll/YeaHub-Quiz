import {useEffect, useState} from "react";
import {useDebounce} from "./useDebounce.js";
import {useFiltersContext} from "./useFiltersContext.ts";
import {type CollectionItem, getCollectionsItems} from "../api/getColletionsData.ts";
import {usePagination} from "./usePagination.ts";

export const useCollectionsPageData = () => {

  const { cardsOnPage } = useFiltersContext();

  const [collectionsData, setCollectionsData] = useState<CollectionItem[]>([]);
  const [isCollectionsLoading, setIsCollectionsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const [totalPages, setTotalPages] = useState(1);

  const {
    currentPage,
    setCurrentPage,
    handleNextPage,
    handlePrevPage,
    handlePageClick,
  } = usePagination({
    totalPages,
    initialPage: 1,
  });

  const {
    searchValue,
    specFilter,
  } = useFiltersContext();

  const debounceKeywords = useDebounce(searchValue, 800);

  useEffect(() => {
    async function getCollections() {
      try {
        setIsCollectionsLoading(true);
        setErrorMessage("");

        const response = await getCollectionsItems({
          currentPage,
          cardsOnPage,
          specFilter,
          debounceKeywords,
        });
        setCollectionsData(response.data);
        setTotalPages(Math.ceil(response.total / response.limit));
      } catch(error) {
        console.log(error)
        setErrorMessage(`Не удалось загрузить коллекции`);
      } finally {
        setIsCollectionsLoading(false);
      }
    }
    getCollections();
  }, [
    currentPage,
    cardsOnPage,
    specFilter,
    debounceKeywords,
    setTotalPages
  ]);

  return {
    collectionsData,
    isCollectionsLoading,
    errorMessage,
    currentPage,
    setCurrentPage,
    handleNextPage,
    handlePrevPage,
    handlePageClick,
    totalPages,
    cardsOnPage,
    debounceKeywords,
  }
}