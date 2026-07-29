import {type Dispatch, type SetStateAction, useRef} from "react";
import useOutsideClick from "../../../hooks/useOutsideClick.ts";
import Drawer from "../../../components/ui/Drawer/Drawer.tsx";
import closeBtn from "../../../assets/icons/closeBtn.svg";
import stylesCollectionsPage from "../../CollectionsPage/CollectionsPage.module.css"
import styles from "./DetailedCollectionPage.module.css";
import DetailedTitle from "../../../components/Detailed/DetailedTitle.tsx";
import DetailedCollectionSidebar from "../DetailedSidebar/DetailedCollectionSidebar.tsx";
import type {Filter} from "../../../api/getFilters.ts";
import type {CollectionItem} from "../../../api/getColletionsData.ts";

interface DetailedCollectionTitleProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  isQuestionsLoading: boolean;
  specs: Filter[];
  collection: CollectionItem;
}

export default function DetailedCollectionTitle(
  {
    isSidebarOpen,
    setIsSidebarOpen,
    specs,
    collection
  }: DetailedCollectionTitleProps) {

  const detailedDrawerRef = useRef(null);
  const detailedSidebarButtonRef = useRef<HTMLButtonElement | null>(null);

  function sidebarClose() {
    setIsSidebarOpen(false);
  }

  useOutsideClick(detailedDrawerRef, sidebarClose, detailedSidebarButtonRef);

  return (
    <div className={`${styles.shadowWrapper} ${styles.titleWrapper}`}>
      <DetailedTitle
        item={collection}
        detailedSidebarButtonRef={detailedSidebarButtonRef}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Drawer
        drawerRef={detailedDrawerRef}
        isOpen={isSidebarOpen}
        className={`${stylesCollectionsPage.drawerSidebar} ${isSidebarOpen ? stylesCollectionsPage.drawerOpen : ""}`}
      >
        <button
          className={stylesCollectionsPage.closeBtn}
          onClick={sidebarClose}
        >
          <img src={closeBtn} alt="Кнопка закрытия сайдбара"/>
        </button>

        <DetailedCollectionSidebar
          collection={collection}
          specs={specs}
          className={stylesCollectionsPage.fixedSidebar}
        />
      </Drawer>
    </div>
  )
}