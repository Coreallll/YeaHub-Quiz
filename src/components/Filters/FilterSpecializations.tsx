import FilterSection from "./FilterSection.tsx";
import { useSpecFilter } from "../../hooks/useSpecFilter.ts";
import type { Specialization } from "../../types/types.ts";

interface FilterSpecializationsProps {
  specs: Specialization[];
}
export default function FilterSpecializations({ specs }: FilterSpecializationsProps) {
  const { specFilter, setSpecFilter } = useSpecFilter();

  return (
    <FilterSection
      title="Специализация"
      items={specs}
      activeValue={specFilter}
      setFilter={(spec) => {
        setSpecFilter(String(spec.id));
      }}
      getLabel={(spec) => spec.title}
      getValue={(spec) => spec.id}
      showAllBtn
    />
  );
}
