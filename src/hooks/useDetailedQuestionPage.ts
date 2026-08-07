import {useParams} from "react-router-dom";
import {getQuestionById} from "../api/getQuestionIdData.ts";
import {type QuestionItem} from "../api/getQuestionsData.ts";
import {useAsync} from "./useAsync.ts";

export const useDetailedQuestionPage = (questionsData: QuestionItem[]) => {

  const { questionId } = useParams();

  const currentQuestionId = Number(questionId);

  const questionIds = questionsData.map(
    (question) => question.id
  );

  const currentIndex = questionIds.findIndex(
    (id) => id === currentQuestionId
  );

  const isPrevDisabled = currentIndex <= 0;

  const isNextDisabled =
    currentIndex === -1 ||
    currentIndex >= questionIds.length - 1;

  const prevQuestionId =
    currentIndex > 0
      ? questionIds[currentIndex - 1]
      : null;

  const nextQuestionId =
    currentIndex >= 0 &&
    currentIndex < questionIds.length - 1
      ? questionIds[currentIndex + 1]
      : null;

  const {
    data: question,
    isLoading: isQuestionLoading,
  } = useAsync(
    (signal) => getQuestionById(Number(questionId), signal), [questionId]
  )

  return {
    question,
    isQuestionLoading,

    isPrevDisabled,
    isNextDisabled,

    prevQuestionId,
    nextQuestionId,
  }
}