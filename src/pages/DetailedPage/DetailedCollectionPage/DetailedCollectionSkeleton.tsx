import styles from "./DetailedCollectionPage.module.css";
import DetailedCollectionTitleSkeleton from "../../../components/Detailed/DetailedTitleSkeleton.tsx";
import QuestionsSkeleton from "../../../components/Questions/QuestionsSkeleton.tsx";
import DetailedSidebarSkeleton from "../DetailedSidebar/DetailedSidebarSkeleton.tsx";
import stylesSidebar from "../../CollectionsPage/CollectionsSidebar/Sidebar.module.css";
import PaginationSkeleton from "../../../components/ui/Pagination/PaginationSkeleton.tsx";

export default function DetailedCollectionSkeleton() {
  return (
    <div className="mainWrapper">
      <div className={styles.contentWrapper}>
        <DetailedCollectionTitleSkeleton />
        <div className="mainContent">
          <QuestionsSkeleton />
          <PaginationSkeleton />
        </div>
      </div>
      <aside className={stylesSidebar.sidebar}>
        <DetailedSidebarSkeleton />
      </aside>
    </div>
  )
}