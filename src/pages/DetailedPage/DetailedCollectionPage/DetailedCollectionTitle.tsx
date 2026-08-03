import {type Dispatch, type SetStateAction, useRef} from "react";
import useOutsideClick from "../../../hooks/useOutsideClick.ts";
import Drawer from "../../../components/ui/Drawer/Drawer.tsx";
import closeBtn from "../../../assets/icons/closeBtn.svg";
import stylesCollectionsPage from "../../CollectionsPage/CollectionsPage.module.css"
import styles from "./DetailedCollectionPage.module.css";
import DetailedTitle from "../../../components/Detailed/DetailedTitle.tsx";
import DetailedCollectionPageSidebar from "./DetailedCollectionPageSidebar.tsx";
import type {CollectionItem} from "../../../api/getColletionsData.ts";
import type {CollectionSpec} from "../../../api/getCollectionSpecsFilters.ts";

interface DetailedCollectionTitleProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  collectionSpecs: CollectionSpec[];
  collection: CollectionItem;
}

export default function DetailedCollectionTitle(
  {
    isSidebarOpen,
    setIsSidebarOpen,
    collectionSpecs,
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

        <DetailedCollectionPageSidebar
          collection={collection}
          collectionSpecs={collectionSpecs}
          className={stylesCollectionsPage.fixedSidebar}
        />
      </Drawer>
    </div>
  )
}