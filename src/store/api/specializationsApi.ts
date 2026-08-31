import { baseApi } from "./baseApi.ts";

export interface Specialization {
  id: string;
  title: string;
  slug: string;
  description: string;
  imageSrc: string | null;
}

export const specializationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecializations: builder.query({
      query: () => ({
        url: "specializations",
      }),
    }),
  }),
});

export const { useGetSpecializationsQuery } = specializationsApi;
