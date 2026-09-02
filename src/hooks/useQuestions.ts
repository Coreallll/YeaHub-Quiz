import { useState } from "react";
import { usePagination } from "./usePagination.ts";
import { useGetQuestionsQuery } from "../store/api/questionsApi.ts";

export const useQuestions = () => {
  const [totalQuestionsPages, setTotalQuestionsPages] = useState(1);
  const { currentPage, cardsOnPage } = usePagination(totalQuestionsPages);

  const {
    data: response,
    isLoading: isQuestionsLoading,
    error,
  } = useGetQuestionsQuery({
    currentPage,
    cardsOnPage,
  });

  const [syncedQuestionsResponse, setSyncedQuestionsResponse] = useState(response);

  if (response !== syncedQuestionsResponse) {
    setSyncedQuestionsResponse(response);
    if (response) setTotalQuestionsPages(Math.ceil(response.total / response.limit));
  }

  return {
    questionsData: response?.data ?? [],
    isQuestionsLoading,
    errorMessage: error,
    currentPage,
    totalQuestionsPages,
    cardsOnPage,
  };
};
