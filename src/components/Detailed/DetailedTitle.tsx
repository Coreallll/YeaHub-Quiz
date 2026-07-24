import itemCardPlaceholder from "../../assets/images/itemCardPlaceholder.png";
import stylesCollectionsPage from "../../pages/CollectionsPage/CollectionsPage.module.css";
import filtersBtn from "../../assets/icons/filtersBtn.svg";
import type {Collection} from "../../hooks/useDetailedCollectionPage.ts";
import type {Dispatch, RefObject, SetStateAction} from "react";
import styles from "./DetailedTitle.module.css"

interface DetailedTitleProps {
  item: Collection | Question;
  detailedSidebarButtonRef: RefObject<HTMLButtonElement | null>;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export default function DetailedTitle(
  {
    item,
    detailedSidebarButtonRef,
    setIsSidebarOpen
  }: DetailedTitleProps) {
  return (
    <>
      <img
        className={styles.cardImg}
        src={item?.imageSrc ?? itemCardPlaceholder}
        alt={item?.title}
      />
      <div className={styles.titleMobileWrapper}>
        <div className={styles.titleText}>
          <h1 className={styles.mainTitle}>{item?.title}</h1>
          <p className={styles.description}>{item?.description}</p>
        </div>

        <button
          ref={detailedSidebarButtonRef}
          className={stylesCollectionsPage.filtersButton}
          onClick={() => setIsSidebarOpen(prev => !prev)}
        >
          <img src={filtersBtn} alt="Кнопка с фильтрами"/>
        </button>
      </div>
    </>
  )
}