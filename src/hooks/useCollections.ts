import {useEffect, useState} from "react";
import {useDebounce} from "./useDebounce.js";
import {useFiltersContext} from "./useFiltersContext.ts";
import {type CollectionItem, getCollectionsItems} from "../api/getColletionsData.ts";
import {usePagination} from "./usePagination.ts";

export const useCollections = () => {

  const { cardsOnPage } = useFiltersContext();

  const [collectionsData, setCollectionsData] = useState<CollectionItem[]>([]);
  const [isCollectionsLoading, setIsCollectionsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const [totalCollectionsPages, setTotalCollectionsPages] = useState(1);
  const { currentPage } = usePagination(totalCollectionsPages);

  const {
    searchValue,
    specFilter,
    accessFilter
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
          accessFilter,
        });
        setCollectionsData(response.data);
        setTotalCollectionsPages(Math.ceil(response.total / response.limit));
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
    setTotalCollectionsPages,
    accessFilter,
  ]);

  return {
    collectionsData,
    isCollectionsLoading,
    setIsCollectionsLoading,
    errorMessage,
    currentPage,
    totalCollectionsPages,
    cardsOnPage,
    debounceKeywords,
  }
}