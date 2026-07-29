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
  inactive?: boolean;
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
      setFilter={(spec) => {
        clearFilters(String(spec.id));
        const params = replaceQueryParams(
          searchParams,
          "specializations",
          spec.id
        );
        setSearchParams(params);
      }}
      getLabel={(spec) => spec.title}
      getValue={(spec) => spec.id}
      showAllBtn
    />
  )
}