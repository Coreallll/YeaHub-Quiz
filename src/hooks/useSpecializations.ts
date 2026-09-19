import { useGetSpecializationsQuery } from "../store/api/specializationsApi.ts";

export const useSpecializations = () => {
  const {
    data: specs = [],
    isLoading: isSpecsLoading,
    isError: isSpecsError,
  } = useGetSpecializationsQuery();

  return {
    specs,
    isSpecsLoading,
    isSpecsError,
  };
};
