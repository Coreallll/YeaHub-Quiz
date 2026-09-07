import { baseApi } from "./baseApi.ts";
import type { Specialization, SpecializationsResponse } from "../../types/specializationTypes.ts";

export const specializationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecializations: builder.query<Specialization[], number | void>({
      query: (specLimit) => ({
        url: "specializations",
        params: {
          ...(specLimit !== undefined && { limit: specLimit }),
        },
      }),
      transformResponse: (response: SpecializationsResponse) => response.data,
    }),
  }),
});

export const { useGetSpecializationsQuery } = specializationsApi;
