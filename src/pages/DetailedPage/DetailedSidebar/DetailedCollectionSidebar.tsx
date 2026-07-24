import stylesSidebar from "../../CollectionsPage/CollectionsSidebar/Sidebar.module.css";
import DetailedSidebarSkeleton from "./DetailedSidebarSkeleton.js";
import FilterSpecializations from "../../../components/Filters/FilterSpecializations.tsx";
import type {Collection} from "../../../hooks/useDetailedCollectionPage.ts";
import type {Filter} from "../../../api/getFilters.ts";
import {useFiltersContext} from "../../../hooks/useFiltersContext.ts";

interface DetailedCollectionSidebarProps {
  collection: Collection;
  isQuestionsLoading: boolean;
  className?: string;
  specs: Filter[];
}

export default function DetailedCollectionSidebar(
  {
    collection,
    isQuestionsLoading,
    specs,
    className =""
  }: DetailedCollectionSidebarProps) {

  const {
    searchParams,
    setSearchParams,

    specFilter,
    clearFilters,

  } = useFiltersContext();

  return (
    <aside className={`${stylesSidebar.sidebar} ${className}`}>
      {isQuestionsLoading ? (
        <DetailedSidebarSkeleton />
      ) : (
        <>
          <FilterSpecializations
            specs={specs}
            specFilter={specFilter}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            clearFilters={clearFilters}
          />
        </>
      )}
    </aside>
  )
}