import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getQuestionById} from "../api/getQuestionIdData.ts";
// import {useQuestions} from "./useQuestions.js";
import type {QuestionItem} from "../api/getQuestionsData.ts";

export const useDetailedQuestionPage = (questionsData: QuestionItem[]) => {
  const [question, setQuestion] = useState<QuestionItem | null>(null);
  const [detailedLoading, setDetailedLoading] = useState(true);

  const { questionId } = useParams();

  // const { questionsData } = useQuestions();

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

  useEffect(() => {
    async function getQuestion() {
      try {
        setDetailedLoading(true);

        const data = await getQuestionById(Number(questionId));

        setQuestion(data);
      } catch (error) {
        console.log(error)
        throw error;
      } finally {
        setDetailedLoading(false);
      }
    }

    getQuestion();
  }, [questionId]);

  return {
    question,
    detailedLoading,

    isPrevDisabled,
    isNextDisabled,

    prevQuestionId,
    nextQuestionId,
  }
}