import styles from "./CollectionsPage.module.css";
import filtersBtn from "../../assets/icons/filtersBtn.svg";
import Drawer from "../../components/ui/Drawer/Drawer.tsx";
import closeBtn from "../../assets/icons/closeBtn.svg";
import {type Dispatch, type SetStateAction, useCallback, useRef} from "react";
import useOutsideClick from "../../hooks/useOutsideClick.ts";
import Skeleton from "../../components/ui/Skeleton/Skeleton.tsx";
import CollectionsSidebar from "./CollectionsSidebar/CollectionsSidebar.tsx";
import type {Filter} from "../../api/getAllFilters.ts";

interface TitleProps {
  specs: Filter[];
  isSidebarLoading: boolean;
  sidebarFiltersError: string;
  isCollectionsLoading: boolean;
  isSidebarOpen?: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export default function CollectionTitle(
  {
    specs,
    isSidebarLoading,
    sidebarFiltersError,
    isCollectionsLoading,
    isSidebarOpen,
    setIsSidebarOpen,
  }: TitleProps
) {

  const sidebarButtonRef = useRef<HTMLButtonElement>(null);
  const collectionsDrawerRef = useRef<HTMLDivElement | null>(null);

  const sidebarClose = useCallback(() => {
    setIsSidebarOpen(false);
  }, [setIsSidebarOpen]);

  useOutsideClick(collectionsDrawerRef, sidebarClose, sidebarButtonRef);

  return (
    <div className={styles.contentTitle}>
      {isCollectionsLoading ? (
        <Skeleton width={300} height={24} />
      ) : (
        <h1 className={styles.mainTitle}>Коллекции</h1>
      )}
      <button
        ref={sidebarButtonRef}
        className={styles.filtersButton}
        onClick={() => setIsSidebarOpen(prev => !prev)}
      >
        <img src={filtersBtn} alt="Кнопка с фильтрами"/>
      </button>
      <Drawer
        drawerRef={collectionsDrawerRef}
        isOpen={isSidebarOpen}
        className={`${styles.drawerSidebar} ${isSidebarOpen ? styles.drawerOpen : ""}`}
      >
        <button
          className={styles.closeBtn}
          onClick={sidebarClose}
        >
          <img src={closeBtn} alt="Кнопка закрытия сайдбара"/>
        </button>
        <CollectionsSidebar
          specs={specs}
          isSidebarLoading={isSidebarLoading}
          sidebarFiltersError={sidebarFiltersError}
          className={styles.fixedSidebar}
        />
      </Drawer>
    </div>
  )
}