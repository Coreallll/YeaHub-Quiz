import CollectionsList from "../../components/Collections/CollectionsList/CollectionsList.tsx";
import styles from "./CollectionsPage.module.css";
import Pagination from "../../components/ui/Pagination/Pagination.tsx";
import CollectionTitle from "./CollectionTitle.tsx";
import {useCollections} from "../../hooks/useCollections.ts";
import {useSidebarFiltersData} from "../../hooks/useSidebarFiltersData.ts";
import {usePagination} from "../../hooks/usePagination.ts";
import CollectionsSidebar from "./CollectionsSidebar/CollectionsSidebar.tsx";
import {useFiltersContext} from "../../hooks/useFiltersContext.ts";

export default function CollectionsPage() {

  const {
    collectionsData,
    isCollectionsLoading,
    totalCollectionsPages,
  } = useCollections();

  const {
    currentPage,
    handleNextPage,
    handlePrevPage,
    handlePageClick,
  } = usePagination(totalCollectionsPages);

  const {
    specs,
    isSidebarLoading,
    sidebarFiltersError,
  } = useSidebarFiltersData();

  const {
    clearFilters,
    isSidebarOpen,
    setIsSidebarOpen,
  } = useFiltersContext();

  return (
    <div className="mainWrapper">
      <div className="mainContent">
        <CollectionTitle
          specs={specs}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarLoading={isSidebarLoading}
          sidebarFiltersError={sidebarFiltersError}
          isCollectionsLoading={isCollectionsLoading}
        />
        <hr className={styles.divider}/>
        <CollectionsList
          collectionsData={collectionsData}
          isCollectionsLoading={isCollectionsLoading}
          clearFilters={clearFilters}
        />
        <Pagination
          isCollectionsLoading={isCollectionsLoading}
          currentPage={currentPage}
          totalPages={totalCollectionsPages}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          handlePageClick={handlePageClick}
        />
      </div>
      <CollectionsSidebar
        specs={specs}
        isSidebarLoading={isSidebarLoading}
        sidebarFiltersError={sidebarFiltersError}
      />
    </div>
  )
}