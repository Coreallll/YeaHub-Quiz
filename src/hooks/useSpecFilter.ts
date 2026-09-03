import { useUrlParams } from "./useUrlParams.ts";
import { useCollectionFilters } from "./useCollectionFilters.ts";

export const useSpecFilter = () => {
  const { setSearchParams } = useUrlParams();

  const { specFilter } = useCollectionFilters();

  const setSpecFilter = (nextSpec: string) => {
    setSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams);

      params.set("specializations", nextSpec);
      params.delete("page");

      return params;
    });
  };

  return {
    specFilter,
    setSpecFilter,
  };
};
