import {useEffect, useState} from "react";
import {getQuestionsItems, type QuestionItem} from "../api/getQuestionsData.ts";
import {useFiltersContext} from "./useFiltersContext.ts";
import {usePagination} from "./usePagination.ts";
import {useParams} from "react-router-dom";

export const useQuestions = () => {

  const {
    specFilter,
    cardsOnPage,
  } = useFiltersContext();

  const [questionsData, setQuestionsData] = useState<QuestionItem[]>([]);
  const [isQuestionsLoading, setIsQuestionsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const [totalQuestionsPages, setTotalQuestionsPages] = useState(1);
  const { currentPage } = usePagination(totalQuestionsPages);

  const { collectionId } = useParams();

  useEffect(() => {
    async function getQuestions() {
      try {
        setIsQuestionsLoading(true);
        setErrorMessage("");

        const response = await getQuestionsItems({
          currentPage,
          cardsOnPage,
          specFilter,
          collectionId
        });
        setQuestionsData(response.data);
        setTotalQuestionsPages(Math.ceil(response.total / response.limit));
      } catch(error) {
        setErrorMessage(`Не удалось загрузить вопросы ${error}`);
      } finally {
        setIsQuestionsLoading(false);
      }
    }
    getQuestions();
  }, [
    currentPage,
    cardsOnPage,
    specFilter,
    collectionId
  ]);

  return {
    questionsData,
    isQuestionsLoading,
    errorMessage,
    currentPage,
    totalQuestionsPages,
    cardsOnPage,
  }
}