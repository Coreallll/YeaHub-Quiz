import { baseApi } from "./baseApi.ts";
import type { Collection } from "../../types/collectionTypes.ts";

export const collectionByIdApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCollectionById: builder.query<Collection, string>({
      query: (collectionId) => ({
        url: `collections/${collectionId}/public`,
      }),
    }),
  }),
});

export const { useGetCollectionByIdQuery } = collectionByIdApi;
