import CollectionsList from "../../components/Collections/CollectionsList/CollectionsList.tsx";
import styles from "./CollectionsPage.module.css";
import Pagination from "../../components/ui/Pagination/Pagination.tsx";
import Title from "./Title.jsx";
// import CollectionsSidebar from "./CollectionsSidebar/CollectionsSidebar.tsx";
import {useCollectionsPageData} from "../../hooks/useCollectionsPage.js";
import {useSidebarFiltersData} from "../../hooks/useSidebarFiltersData.ts";
import {usePagination} from "../../hooks/usePagination.ts";
import CollectionsSidebar from "./CollectionsSidebar/CollectionsSidebar.tsx";

export default function CollectionsPage() {

  const {
    collectionsData,
    isCollectionsLoading,
    debounceKeywords,

    totalPages,
  } = useCollectionsPageData();

  const {
    currentPage,
    handleNextPage,
    handlePrevPage,
    handlePageClick,
  } = usePagination({
    totalPages,
    initialPage: 1,
  });

  const {
    specs,
    isSidebarLoading,
    sidebarFiltersError,
  } = useSidebarFiltersData();

  return (
    <div className="mainWrapper">
      <div className="mainContent">
        <Title
          specs={specs}
          isSidebarLoading={isSidebarLoading}
          sidebarFiltersError={sidebarFiltersError}
          isCollectionsLoading={isCollectionsLoading}
        />
        <hr className={styles.divider}/>
        <CollectionsList
          collectionsData={collectionsData}
          isCollectionsLoading={isCollectionsLoading}
          debounceKeywords={debounceKeywords}
        />

        <Pagination
          isCollectionsLoading={isCollectionsLoading}
          currentPage={currentPage}
          totalPages={totalPages}
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