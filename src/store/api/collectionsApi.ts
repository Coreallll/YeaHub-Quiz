import { baseApi } from "./baseApi.ts";
import type { Specialization } from "./specializationsApi.ts";

interface GetCollectionsParams {
  currentPage?: number;
  cardsOnPage?: number;
  specs?: string;
  search?: string;
  accessFilter?: string;
}

export interface Company {
  id: string;
  title: string;
  description: string;
  imageSrc: string | null;
}

export interface User {
  id: string;
  username: string;
}

export interface Collection {
  id: string;
  title: string;
  slug: string;
  description: string;
  imageSrc: string | null;
  isFree: boolean;
  keywords: string[];
  company: Company;
  specializations: Specialization[];
  questionsCount: number;
  createdBy: User;
}

interface CollectionsResponse {
  data: Collection[];
  page: number;
  limit: number;
  total: number;
}

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
