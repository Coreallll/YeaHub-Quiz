import FilterSection from "./FilterSection.tsx";
import { useSpecFilter } from "../../hooks/useSpecFilter.ts";
import { useGetSpecializationsQuery } from "../../store/api/specializationsApi.ts";
import { useClearFilters } from "../../hooks/useClearFilters.ts";

export default function FilterSpecializations() {
  const { specFilter } = useSpecFilter();
  const { data: specs = [] } = useGetSpecializationsQuery();

  const clearFilters = useClearFilters();

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
  );
}
