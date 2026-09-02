import useSearch from "./useSearch.ts";
import { useUrlParams } from "./useUrlParams.ts";
import { useCallback } from "react";

export const useClearFilters = () => {
  const { setSearchDraft } = useSearch();
  const { setSearchParams } = useUrlParams();

  const clearFilters = useCallback(
    (nextSpec: string = "11") => {
      setSearchDraft("");

      setSearchParams((prevParams) => {
        const params = new URLSearchParams(prevParams);

        params.set("specializations", nextSpec);

        params.delete("search");
        params.delete("isFree");
        params.delete("page");

        return params;
      });
    },
    [setSearchDraft, setSearchParams],
  );

  return clearFilters;
};
