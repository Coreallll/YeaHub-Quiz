import { baseApi } from "./baseApi.ts";
import type { CollectionsResponse, GetCollectionsParams } from "../../types/collectionTypes.ts";

export const collectionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCollections: builder.query<CollectionsResponse, GetCollectionsParams>({
      query: ({ currentPage, cardsOnPage, specs, search, accessFilter }) => ({
        url: "collections/public",
        params: {
          ...(currentPage && { page: currentPage }),
          ...(cardsOnPage && { limit: cardsOnPage }),
          ...(specs && { specializations: specs }),
          ...(search && { titleOrDescriptionSearch: search.trim() }),
          ...(accessFilter && { isFree: accessFilter }),
        },
      }),
    }),
  }),
});

export const { useGetCollectionsQuery } = collectionsApi;
