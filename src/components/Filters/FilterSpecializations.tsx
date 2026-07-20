import FilterSection from "./FilterSection.tsx";
import type {Filter} from "../../api/getFilters.ts";
import {replaceQueryParams} from "../../utils/replaceQueryParams.ts";
import type {SetURLSearchParams} from "react-router-dom";

interface FilterSpecializationProps {
  specs: Filter[];
  specFilter: string | null;
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
  clearFilters: (nextSpec?: string) => void;
}

export default function FilterSpecializations(
    {
      specs,
      specFilter,
      searchParams,
      setSearchParams,
      clearFilters
    }: FilterSpecializationProps) {

  return (
    <FilterSection
      title="Специализация"
      items={specs}
      activeValue={specFilter}
      setFilter={(item: Filter) => {
        clearFilters(item.id);
        const params = replaceQueryParams(
          searchParams,
          "specializations",
          item.id
        );
        setSearchParams(params);
      }}
      getValue={(item: Filter) => item.title}
      showAllBtn
    />
  )
}