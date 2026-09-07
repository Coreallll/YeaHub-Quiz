import styles from "./Sidebar.module.css";
import SearchFilter from "../../../components/Filters/SearchFilter.tsx";
import FilterSpecializations from "../../../components/Filters/FilterSpecializations.tsx";
import CollectionsSidebarSkeleton from "./CollectionsSidebarSkeleton.tsx";
import FilterAccess from "../../../components/Filters/FiltersAccess.tsx";
import { useSpecializations } from "../../../hooks/useSpecializations.ts";

interface CollectionsSidebarProps {
  className?: string;
}

export default function CollectionsSidebar({ className = "" }: CollectionsSidebarProps) {
  const { specs, isSpecsLoading, isSpecsError } = useSpecializations();

  return (
    <aside className={`${styles.sidebar} ${className}`}>
      {isSpecsError ? (
        <p>Произошла ошибка при загрузке фильтров</p>
      ) : isSpecsLoading ? (
        <CollectionsSidebarSkeleton />
      ) : (
        <>
          <SearchFilter />
          <FilterSpecializations specs={specs} />
          <FilterAccess />
        </>
      )}
    </aside>
  );
}
