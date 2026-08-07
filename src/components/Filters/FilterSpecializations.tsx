import FilterSection from "./FilterSection.tsx";
import type {Filter} from "../../api/getAllFilters.ts";

interface FilterSpecializationProps {
  specs: Filter[];
  specFilter: string | null;
  clearFilters: (nextSpec?: string) => void;
  inactive?: boolean;
}

export default function FilterSpecializations(
    {
      specs,
      specFilter,
      clearFilters
    }: FilterSpecializationProps) {

  return (
    <FilterSection
      title="Специализация"
      items={specs}
      activeValue={specFilter}
      setFilter={(spec) => {
        clearFilters(String(spec.id));
      }}
      getLabel={(spec) => spec.title}
      getValue={(spec) => spec.id}
      showAllBtn
    />
  )
}