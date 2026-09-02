import { baseApi } from "./baseApi.ts";

export interface Specialization {
  id: string;
  title: string;
  slug: string;
  description: string;
  imageSrc: string | null;
}

// interface SpecializationsResponse {
//   data: Specialization[];
// }

export const specializationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecializations: builder.query<Specialization[], void>({
      query: () => ({
        url: "specializations",
      }),
    }),
  }),
});

export const { useGetSpecializationsQuery } = specializationsApi;
