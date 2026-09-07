import { useGetQuizQuestionsQuery } from "../store/api/quizApi.ts";
import { useFormContext } from "react-hook-form";
import type { QuizFormValues } from "../pages/QuizPage/QuizPage.tsx";

export const useQuizQuestions = () => {
  const { getValues } = useFormContext<QuizFormValues>();
  const spec = getValues("spec");
  const skills = getValues("skills");
  const complexity = getValues("complexity");
  const quizQuestionsLimit = getValues("questionsLimit");

  const {
    data: quizQuestions,
    isLoading: isQuizQuestionsLoading,
    isError: isQuizQuestionsError,
  } = useGetQuizQuestionsQuery({
    spec,
    skills,
    complexity,
    quizQuestionsLimit,
  });

  return {
    quizQuestions,
    isQuizQuestionsLoading,
    isQuizQuestionsError,
  };
};
