import { useGetQuizQuestionsQuery } from "../store/api/quizApi.ts";
import { useAppDispatch, useAppSelector } from "./hooks.ts";
import { skipToken } from "@reduxjs/toolkit/query";
import { useEffect } from "react";
import { setCurrentQuestionId, setQuestions } from "../components/Quiz/quizSlice.ts";

export const useQuizQuestions = () => {
  const quizParams = useAppSelector((state) => state.quizState.params);

  const queryArgs = quizParams
    ? {
        specialization: quizParams.specialization,
        skills: quizParams.skills,
        complexity: quizParams.complexity,
        limit: quizParams.limit,
      }
    : skipToken;

  const {
    data: quizQuestions = [],
    isLoading: isQuizQuestionsLoading,
    isError: isQuizQuestionsError,
  } = useGetQuizQuestionsQuery(queryArgs);

  const dispatch = useAppDispatch();

  const questions = useAppSelector((state) => state.quizState.questions);

  const currentQuestionId = useAppSelector((state) => state.quizState.currentQuestionId);

  useEffect(() => {
    if (quizQuestions.length > 0 && questions.length === 0) {
      dispatch(setQuestions(quizQuestions));

      dispatch(setCurrentQuestionId(quizQuestions[0].id));
    }
  }, [quizQuestions, currentQuestionId, dispatch]);

  const currentQuestion = questions.find((question) => question.id === currentQuestionId);

  return {
    questions,
    currentQuestion,
    currentQuestionId,
    isQuizQuestionsLoading,
    isQuizQuestionsError,
  };
};
