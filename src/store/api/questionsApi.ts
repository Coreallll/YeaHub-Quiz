import { baseApi } from "./baseApi.ts";

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: ({ currentPage, cardsOnPage, specFilter }) => ({
        url: "questions/public-questions",
        params: {
          ...(currentPage && { page: currentPage }),
          ...(cardsOnPage && { limit: cardsOnPage }),
          ...(specFilter && { specializationId: specFilter }),
        },
      }),
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsApi;
