import { baseApi } from "./baseApi.ts";

export interface Filter {
  id: string | number;
  title: string;
  description: string;
  imageSrc: string | null;
}

export const specsFiltersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecs: builder.query({
      query: () => ({
        url: "specializations",
        params: { limit: 30 },
      }),
    }),
  }),
});

export const { useGetSpecsQuery } = specsFiltersApi;
