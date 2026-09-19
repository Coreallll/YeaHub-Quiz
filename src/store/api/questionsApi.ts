import { baseApi } from "./baseApi.ts";
import type { Question, QuestionsParams, QuestionsResponse } from "../../types/questionTypes.ts";

interface QuestionFilters {
  specFilter?: string;
  collectionId?: number;
}

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
    getDetailedQuestions: builder.query<Question[], QuestionFilters>({
      async queryFn({ specFilter, collectionId }, _api, _extraOptions, baseQuery) {
        const limit = 100;

        const firstResult = await baseQuery({
          url: "questions/public-questions",
          params: {
            page: 1,
            limit,
            ...(specFilter && { specializationId: specFilter }),
            ...(collectionId && { collection: collectionId }),
          },
        });

        if (firstResult.error) {
          return { error: firstResult.error };
        }

        const firstResponse = firstResult.data as QuestionsResponse;

        const allDetailedQuestions = [...firstResponse.data];

        const totalPages = Math.ceil(firstResponse.total / firstResponse.limit);

        for (let page = 2; page <= totalPages; page++) {
          const result = await baseQuery({
            url: "questions/public-questions",
            params: {
              page,
              limit,
              ...(specFilter && { specializationId: specFilter }),
              ...(collectionId && { collection: collectionId }),
            },
          });

          if (result.error) {
            return { error: result.error };
          }

          const response = result.data as QuestionsResponse;

          allDetailedQuestions.push(...response.data);
        }

        return { data: allDetailedQuestions };
      },
    }),
  }),
});

export const { useGetQuestionsQuery, useGetDetailedQuestionsQuery } = questionsApi;
