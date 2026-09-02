import styles from "./CollectionsPage.module.css";
import filtersBtn from "../../assets/icons/filtersBtn.svg";
import Drawer from "../../components/ui/Drawer/Drawer.tsx";
import closeBtn from "../../assets/icons/closeBtn.svg";
import { useRef } from "react";
import useOutsideClick from "../../hooks/useOutsideClick.ts";
import Skeleton from "../../components/ui/Skeleton/Skeleton.tsx";
import CollectionsSidebar from "./CollectionsSidebar/CollectionsSidebar.tsx";
import { useSidebarState } from "../../hooks/useSidebarState.ts";

interface CollectionTitleProps {
  isCollectionsLoading: boolean;
}

export default function CollectionTitle({ isCollectionsLoading }: CollectionTitleProps) {
  const sidebarButtonRef = useRef<HTMLButtonElement>(null);
  const collectionsDrawerRef = useRef<HTMLDivElement | null>(null);

  const { isSidebarOpen, closeSidebar, toggleSidebar } = useSidebarState();

  useOutsideClick(collectionsDrawerRef, closeSidebar, sidebarButtonRef);

  return (
    <div className={styles.contentTitle}>
      {isCollectionsLoading ? (
        <Skeleton
          width={300}
          height={24}
        />
      ) : (
        <h1 className={styles.mainTitle}>Коллекции</h1>
      )}
      <button
        ref={sidebarButtonRef}
        className={styles.filtersButton}
        onClick={() => toggleSidebar}
      >
        <img
          src={filtersBtn}
          alt="Кнопка с фильтрами"
        />
      </button>
      <Drawer
        drawerRef={collectionsDrawerRef}
        isOpen={isSidebarOpen}
        className={`${styles.drawerSidebar} ${isSidebarOpen ? styles.drawerOpen : ""}`}
      >
        <button
          className={styles.closeBtn}
          onClick={closeSidebar}
        >
          <img
            src={closeBtn}
            alt="Кнопка закрытия сайдбара"
          />
        </button>
        <CollectionsSidebar className={styles.fixedSidebar} />
      </Drawer>
    </div>
  );
}
