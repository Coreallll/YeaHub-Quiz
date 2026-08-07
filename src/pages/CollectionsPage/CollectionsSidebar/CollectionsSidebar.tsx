import styles from './Sidebar.module.css';
import SearchFilter from "../../../components/Filters/SearchFilter.tsx";
import FilterSpecializations from "../../../components/Filters/FilterSpecializations.tsx";
import CollectionsSidebarSkeleton from "./CollectionsSidebarSkeleton.tsx";
import {useFiltersContext} from "../../../hooks/useFiltersContext.ts";
import type {Filter} from "../../../api/getAllFilters.ts";
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
    searchDraft,
    setSearchDraft,
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
            searchDraft={searchDraft}
            setSearchDraft={setSearchDraft}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
          <FilterSpecializations
            specs={specs}
            specFilter={specFilter}
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