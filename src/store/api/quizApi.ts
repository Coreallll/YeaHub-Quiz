import { baseApi } from "./baseApi.ts";
import type { QuizParams, QuizResponse } from "../../types/QuizTypes.ts";
import type { Question } from "../../types/questionTypes.ts";

export const quizApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuizQuestions: builder.query<Question[], QuizParams>({
      query: ({ spec, skills, complexity, quizQuestionsLimit }) => ({
        url: "interview-preparation/quizzes/mock/new",
        params: {
          ...(spec && { specialization: spec }),
          ...(skills && { skills: skills }),
          ...(complexity && { complexity: complexity }),
          ...(quizQuestionsLimit && { limit: quizQuestionsLimit }),
        },
      }),
      transformResponse: (response: QuizResponse) => response.questions,
    }),
  }),
});

export const { useGetQuizQuestionsQuery } = quizApi;
