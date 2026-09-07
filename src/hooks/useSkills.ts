import { useFormContext } from "react-hook-form";
import type { QuizFormValues } from "../pages/QuizPage/QuizPage.tsx";
import { useGetSkillsQuery } from "../store/api/skillsApi.ts";

export const useSkills = (skillsLimit?: number) => {
  const { getValues } = useFormContext<QuizFormValues>();
  const spec = getValues("spec");

  const {
    data: skills = [],
    isLoading: isSkillsLoading,
    isError: isSkillsError,
  } = useGetSkillsQuery({ skillsLimit, spec });

  return {
    skills,
    isSkillsLoading,
    isSkillsError,
  };
};
