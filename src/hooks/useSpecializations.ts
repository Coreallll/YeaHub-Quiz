import { useGetSpecializationsQuery } from "../store/api/specializationsApi.ts";

export const useSpecializations = (specLimit?: number) => {
  const {
    data: specs = [],
    isLoading: isSpecsLoading,
    isError: isSpecsError,
  } = useGetSpecializationsQuery(specLimit);

  return {
    specs,
    isSpecsLoading,
    isSpecsError,
  };
};
