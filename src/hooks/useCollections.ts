import { useEffect } from "react";
import { usePagination } from "./usePagination.ts";
import { useGetCollectionsQuery } from "../store/api/collectionsApi.ts";
import { useCollectionFilters } from "./useCollectionFilters.ts";

export const useCollections = () => {
  const { currentPage, cardsOnPage, changePage } = usePagination();
  const { specFilter, searchFilter, isFree } = useCollectionFilters();

  const {
    data: collections,
    isError,
    isLoading: isCollectionsLoading,
    isFetching: isCollectionsFetching,
  } = useGetCollectionsQuery({
    specs: specFilter,
    search: searchFilter,
    accessFilter: isFree,
  });

  const collectionsWithQuestions = collections?.filter(
    (collection) => collection.questionsCount > 0,
  );

  const totalCollectionsPages = collectionsWithQuestions
    ? Math.ceil(collectionsWithQuestions.length / cardsOnPage)
    : 0;

  const startPageIndex = (currentPage - 1) * cardsOnPage;

  const collectionsData = collectionsWithQuestions?.slice(
    startPageIndex,
    startPageIndex + cardsOnPage,
  );

  useEffect(() => {
    if (isCollectionsFetching) return;
    if (!collections) return;
    if (totalCollectionsPages > 0 && currentPage > totalCollectionsPages) {
      changePage(totalCollectionsPages);
    }
  }, [currentPage, totalCollectionsPages, isCollectionsFetching, collections, changePage]);

  return {
    collectionsData: collectionsData ?? [],
    isCollectionsFetching,
    isCollectionsLoading,
    isError,
    currentPage,
    totalCollectionsPages,
    cardsOnPage,
  };
};
