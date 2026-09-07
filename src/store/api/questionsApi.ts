import { baseApi } from "./baseApi.ts";
import type { QuestionsParams, QuestionsResponse } from "../../types/questionTypes.ts";

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query<QuestionsResponse, QuestionsParams>({
      query: ({ currentPage, cardsOnPage, specFilter, collectionId }) => ({
        url: "questions/public-questions",
        params: {
          ...(currentPage && { page: currentPage }),
          ...(cardsOnPage && { limit: cardsOnPage }),
          ...(specFilter && { specializationId: specFilter }),
          ...(collectionId && { collection: collectionId }),
        },
      }),
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsApi;
