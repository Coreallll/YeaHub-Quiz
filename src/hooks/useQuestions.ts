import { useState } from "react";
import { usePagination } from "./usePagination.ts";
import { useGetQuestionsQuery } from "../store/api/questionsApi.ts";
import { useCollectionFilters } from "./useCollectionFilters.ts";
import { useParams } from "react-router-dom";

export const useQuestions = () => {
  const [totalQuestionsPages, setTotalQuestionsPages] = useState(1);
  const { currentPage, cardsOnPage } = usePagination(totalQuestionsPages);
  const { specFilter } = useCollectionFilters();
  const { collectionId } = useParams();

  const {
    data: response,
    isLoading: isQuestionsLoading,
    isError: isQuestionError,
  } = useGetQuestionsQuery({
    currentPage,
    cardsOnPage,
    specFilter,
    collectionId,
  });

  const [syncedQuestionsResponse, setSyncedQuestionsResponse] = useState(response);

  if (response !== syncedQuestionsResponse) {
    setSyncedQuestionsResponse(response);
    if (response) setTotalQuestionsPages(Math.ceil(response.total / response.limit));
  }

  return {
    questionsData: response?.data ?? [],
    isQuestionsLoading,
    isQuestionError,
    currentPage,
    totalQuestionsPages,
    cardsOnPage,
  };
};
