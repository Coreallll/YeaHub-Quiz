import styles from "./Filters.module.css";
import FilterSection from "./FilterSection.tsx";
import { replaceQueryParams } from "../../utils/replaceQueryParams.ts";
import { useUrlParams } from "../../hooks/useUrlParams.ts";

export default function FilterAccess() {
  const { searchParams, setSearchParams } = useUrlParams();
  const accessFilter = searchParams.get("isFree") ?? "";

  const accessItems = [
    {
      label: "Для всех",
      value: "true",
    },
    {
      label: "Для участников",
      value: "false",
    },
  ];

  return (
    <section className={styles.section}>
      <FilterSection
        title="Доступ"
        items={accessItems}
        activeValue={accessFilter}
        multiple
        getValue={(access) => access.value}
        getLabel={(access) => access.label}
        setFilter={(access) => {
          const params = replaceQueryParams(searchParams, "isFree", access.value);
          setSearchParams(params);
        }}
      />
    </section>
  );
}
