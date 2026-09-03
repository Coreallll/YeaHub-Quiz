import { useUrlParams } from "./useUrlParams.ts";

export const useCollectionFilters = () => {
  const { searchParams } = useUrlParams();

  const specFilter = searchParams.get("specializations") ?? "11";

  const accessFilter = searchParams.get("isFree") ?? "";

  const searchFilter = searchParams.get("search") ?? "";

  const isFree = accessFilter === "" ? undefined : accessFilter === "true";

  return {
    specFilter,
    accessFilter,
    searchFilter,
    isFree,
  };
};
