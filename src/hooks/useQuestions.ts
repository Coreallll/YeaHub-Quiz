import {useState} from "react";
import {getQuestionsItems} from "../api/getQuestionsData.ts";
import {useFiltersContext} from "./useFiltersContext.ts";
import {usePagination} from "./usePagination.ts";
import {useParams} from "react-router-dom";
import {useAsync} from "./useAsync.ts";

export const useQuestions = () => {

  const {
    specFilter,
    cardsOnPage,
  } = useFiltersContext();

  const [totalQuestionsPages, setTotalQuestionsPages] = useState(1);
  const { currentPage } = usePagination(totalQuestionsPages);

  const { collectionId } = useParams();


  const {
    data: response,
    isLoading: isQuestionsLoading,
    error
  } = useAsync(
    (signal) => getQuestionsItems({
      currentPage,
      cardsOnPage,
      specFilter,
      collectionId,
      signal
    }), [
      currentPage,
      cardsOnPage,
      specFilter,
      collectionId
    ]
  )

  const [syncedQuestionsResponse, setSyncedQuestionsResponse] = useState(response);

  if(response !== syncedQuestionsResponse) {
    setSyncedQuestionsResponse(response);
    if(response) setTotalQuestionsPages(Math.ceil(response.total / response.limit))
  }


  return {
    questionsData: response?.data ?? [],
    isQuestionsLoading,
    errorMessage: error,
    currentPage,
    totalQuestionsPages,
    cardsOnPage,
  }
}