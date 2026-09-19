import { useEffect } from "react";
import { usePagination } from "./usePagination.ts";
import { useGetDetailedQuestionsQuery } from "../store/api/questionsApi.ts";
import { useCollectionFilters } from "./useCollectionFilters.ts";
import { useParams } from "react-router-dom";

export const useQuestions = () => {
  const { currentPage, cardsOnPage, changePage } = usePagination();
  const { specFilter } = useCollectionFilters();
  const { collectionId } = useParams();

  const {
    data: questions,
    isLoading: isQuestionsLoading,
    isError: isQuestionError,
    isFetching: isQuestionsFetching,
  } = useGetDetailedQuestionsQuery({ specFilter, collectionId: Number(collectionId) });

  const totalQuestionsPages = questions ? Math.ceil(questions.length / cardsOnPage) : 0;

  const startPageIndex = (currentPage - 1) * cardsOnPage;

  const questionsData = questions?.slice(startPageIndex, startPageIndex + cardsOnPage);

  useEffect(() => {
    if (isQuestionsFetching) return;
    if (!questions) return;
    if (totalQuestionsPages > 0 && currentPage > totalQuestionsPages) {
      changePage(totalQuestionsPages);
    }
  }, [currentPage, totalQuestionsPages, isQuestionsFetching, questions, changePage]);

  return {
    questionsData: questionsData ?? [],
    isQuestionsLoading,
    isQuestionError,
    currentPage,
    totalQuestionsPages,
    cardsOnPage,
  };
};
