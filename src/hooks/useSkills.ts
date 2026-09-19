import { useFormContext } from "react-hook-form";
import type { QuizFormValues } from "../pages/QuizPage/QuizPage.tsx";
import { useGetSkillsQuery } from "../store/api/skillsApi.ts";
export const useSkills = () => {
  const { watch } = useFormContext<QuizFormValues>();
  const spec = watch("specialization");

  const {
    data: skills = [],
    isLoading: isSkillsLoading,
    isError: isSkillsError,
  } = useGetSkillsQuery({ spec });

  return {
    skills,
    isSkillsLoading,
    isSkillsError,
  };
};
