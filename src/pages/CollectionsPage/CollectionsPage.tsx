import CollectionsList from "../../components/Collections/CollectionsList/CollectionsList.tsx";
import styles from "./CollectionsPage.module.css";
import Pagination from "../../components/ui/Pagination/Pagination.tsx";
import CollectionTitle from "./CollectionTitle.tsx";
import { useCollections } from "../../hooks/useCollections.ts";
import { usePagination } from "../../hooks/usePagination.ts";
import CollectionsSidebar from "./CollectionsSidebar/CollectionsSidebar.tsx";

export default function CollectionsPage() {
  const { collectionsData, isCollectionsLoading, isError, totalCollectionsPages } =
    useCollections();

  const { currentPage, handleNextPage, handlePrevPage, handlePageClick } =
    usePagination(totalCollectionsPages);

  return (
    <div className="mainWrapper">
      <div className="mainContent">
        <CollectionTitle isCollectionsLoading={isCollectionsLoading} />
        <hr className={styles.divider} />
        <CollectionsList
          collectionsData={collectionsData}
          isCollectionsLoading={isCollectionsLoading}
          isError={isError}
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
      <CollectionsSidebar />
    </div>
  );
}
