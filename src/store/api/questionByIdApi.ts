import { baseApi } from "./baseApi.ts";
import type { Question } from "../../types/questionTypes.ts";

export const questionByIdApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestionById: builder.query<Question, number>({
      query: (questionId) => ({
        url: `/questions/public-questions/${questionId}`,
      }),
    }),
  }),
});

export const { useGetQuestionByIdQuery } = questionByIdApi;
