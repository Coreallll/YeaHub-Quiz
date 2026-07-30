import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getQuestionById} from "../api/getQuestionIdData.ts";
import {useQuestions} from "./useQuestions.js";
import type {QuestionItem} from "../api/getQuestionsData.ts";

export const useDetailedQuestionPage = () => {
  const [question, setQuestion] = useState<QuestionItem | null>(null);
  const [detailedLoading, setDetailedLoading] = useState(true);

  const { id } = useParams();

  const { questionsData } = useQuestions();

  const questionIds = questionsData.map(question => question.id);

  const currentIndex = questionIds.findIndex(
    questionId => questionId === Number(id)
  );

  const isPrevDisabled = currentIndex <= 0;
  const isNextDisabled = currentIndex >= questionsData.length - 1;

  const prevQuestionId = questionIds[currentIndex - 1];
  const nextQuestionId = questionIds[currentIndex + 1];

  useEffect(() => {
    async function getQuestion() {
      try {
        setDetailedLoading(true);

        const data = await getQuestionById(Number(id));

        setQuestion(data);
      } catch (error) {
        console.log(error)
        throw error;
      } finally {
        setDetailedLoading(false);
      }
    }

    getQuestion();
  }, [id]);

  return {
    question,
    detailedLoading,

    isPrevDisabled,
    isNextDisabled,

    prevQuestionId,
    nextQuestionId,
  }
}