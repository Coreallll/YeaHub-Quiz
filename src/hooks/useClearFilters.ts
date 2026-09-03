import useSearch from "./useSearch.ts";
import { useUrlParams } from "./useUrlParams.ts";

export const useClearFilters = () => {
  const { setSearchDraft } = useSearch();
  const { setSearchParams } = useUrlParams();

  return () => {
    setSearchDraft("");
    setSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams);
      params.set("specializations", "11");
      params.delete("search");
      params.delete("isFree");
      params.delete("page");

      return params;
    });
  };
};
