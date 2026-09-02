import styles from "./Sidebar.module.css";
import SearchFilter from "../../../components/Filters/SearchFilter.tsx";
import FilterSpecializations from "../../../components/Filters/FilterSpecializations.tsx";
import CollectionsSidebarSkeleton from "./CollectionsSidebarSkeleton.tsx";
import FilterAccess from "../../../components/Filters/FiltersAccess.tsx";
import { useGetSpecializationsQuery } from "../../../store/api/specializationsApi.ts";

interface CollectionsSidebarProps {
  className?: string;
}

export default function CollectionsSidebar({ className = "" }: CollectionsSidebarProps) {
  const { isLoading: isSidebarLoading, error: sidebarFiltersError } = useGetSpecializationsQuery();

  return (
    <aside className={`${styles.sidebar} ${className}`}>
      {sidebarFiltersError ? (
        <p>Произошла ошибка при загрузке фильтров</p>
      ) : isSidebarLoading ? (
        <CollectionsSidebarSkeleton />
      ) : (
        <>
          <SearchFilter />
          <FilterSpecializations />
          <FilterAccess />
        </>
      )}
    </aside>
  );
}
