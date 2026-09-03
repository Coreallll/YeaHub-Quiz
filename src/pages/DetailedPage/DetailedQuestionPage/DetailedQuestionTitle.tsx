import { useRef } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick.ts";
import Drawer from "../../../components/ui/Drawer/Drawer.tsx";
import closeBtn from "../../../assets/icons/closeBtn.svg";
import stylesCollectionsPage from "../../CollectionsPage/CollectionsPage.module.css";
import styles from "../DetailedCollectionPage/DetailedCollectionPage.module.css";
import DetailedTitle from "../../../components/Detailed/DetailedTitle.tsx";
import DetailedQuestionPageSidebar from "../DetailedQuestionPage/DetailedQuestionPageSidebar/DetailedQuestionPageSidebar.tsx";
import { useSidebarState } from "../../../hooks/useSidebarState.ts";
import type { Question } from "../../../types/questionTypes.ts";

interface DetailedQuestionTitleProps {
  question: Question;
}

export default function DetailedQuestionTitle({ question }: DetailedQuestionTitleProps) {
  const detailedDrawerRef = useRef(null);
  const detailedSidebarButtonRef = useRef<HTMLButtonElement | null>(null);

  const { isSidebarOpen, closeSidebar, toggleSidebar } = useSidebarState();

  useOutsideClick(detailedDrawerRef, closeSidebar, detailedSidebarButtonRef);

  return (
    <div className={`${styles.shadowWrapper} ${styles.titleWrapper}`}>
      <DetailedTitle
        item={question}
        detailedSidebarButtonRef={detailedSidebarButtonRef}
        toggleSidebar={toggleSidebar}
      />
      <Drawer
        drawerRef={detailedDrawerRef}
        isOpen={isSidebarOpen}
        className={`${stylesCollectionsPage.drawerSidebar} ${isSidebarOpen ? stylesCollectionsPage.drawerOpen : ""}`}
      >
        <button
          className={stylesCollectionsPage.closeBtn}
          onClick={closeSidebar}
        >
          <img
            src={closeBtn}
            alt="Кнопка закрытия сайдбара"
          />
        </button>

        <DetailedQuestionPageSidebar
          question={question}
          className={stylesCollectionsPage.fixedSidebar}
        />
      </Drawer>
    </div>
  );
}
