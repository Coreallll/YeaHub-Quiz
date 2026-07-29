import styles from './Sidebar.module.css';
import SearchFilter from "../../../components/Filters/SearchFilter.tsx";
import FilterSpecializations from "../../../components/Filters/FilterSpecializations.tsx";
import CollectionsSidebarSkeleton from "./CollectionsSidebarSkeleton.tsx";
import {useFiltersContext} from "../../../hooks/useFiltersContext.ts";
import type {Filter} from "../../../api/getFilters.ts";
import FilterAccess from "../../../components/Filters/FiltersAccess.tsx";

interface CollectionsSidebarProps {
  specs: Filter[];
  isSidebarLoading?: boolean;
  sidebarFiltersError?: string;
  className?: string;
}

export default function CollectionsSidebar(
  {
    specs,
    isSidebarLoading,
    sidebarFiltersError,
    className = ""
  }: CollectionsSidebarProps) {

  const {
    searchValue,
    setSearchValue,
    searchParams,
    setSearchParams,

    specFilter,
    clearFilters,
    accessFilter

  } = useFiltersContext();

  return (
    <aside className={`${styles.sidebar} ${className}`}>
      {sidebarFiltersError ? (
          <p>{sidebarFiltersError}</p>
        ) : isSidebarLoading ? (
          <CollectionsSidebarSkeleton />
      ) : (
        <>
          <SearchFilter
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
          <FilterSpecializations
            specs={specs}
            specFilter={specFilter}
            searchParams={searchParams}
            setSearchParams={setSearchParams}

            clearFilters={clearFilters}
          />
          <FilterAccess
            accessFilter={accessFilter}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
        </>
      )}
    </aside>
  )
}