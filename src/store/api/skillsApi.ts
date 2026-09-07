import { baseApi } from "./baseApi.ts";
import type { Skill, SkillsResponse } from "../../types/skillsTypes.ts";

interface SkillsParams {
  skillsLimit?: number;
  spec?: number;
}

export const skillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query<Skill[], SkillsParams>({
      query: ({ skillsLimit, spec }) => ({
        url: "skills",
        params: {
          ...(skillsLimit !== undefined && { limit: skillsLimit }),
          ...(spec !== undefined && { specializations: spec }),
        },
      }),
      transformResponse: (response: SkillsResponse) => response.data,
    }),
  }),
});

export const { useGetSkillsQuery } = skillsApi;
