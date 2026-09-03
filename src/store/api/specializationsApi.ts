import { baseApi } from "./baseApi.ts";
import type { Specialization, SpecializationsResponse } from "../../types/types.ts";

export const specializationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecializations: builder.query<Specialization[], void>({
      query: () => ({
        url: "specializations",
        params: { limit: 30 },
      }),
      transformResponse: (response: SpecializationsResponse) => response.data,
    }),
  }),
});

export const { useGetSpecializationsQuery } = specializationsApi;
