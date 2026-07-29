import styles from "../../pages/CollectionsPage/CollectionsSidebar/Sidebar.module.css";
import FilterSection from "./FilterSection.tsx";
import type {SetURLSearchParams} from "react-router-dom";
import {replaceQueryParams} from "../../utils/replaceQueryParams.ts";

interface FilterAccessProps {
  accessFilter: string;
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}

export default function FilterAccess(
  {
    accessFilter,
    searchParams,
    setSearchParams,
  }: FilterAccessProps) {

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
          const params = replaceQueryParams(
            searchParams,
            "isFree",
            access.value
          );
          setSearchParams(params);
        }}
      />
    </section>
  )
}