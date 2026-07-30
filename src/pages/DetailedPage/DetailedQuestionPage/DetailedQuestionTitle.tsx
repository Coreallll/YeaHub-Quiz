import {type Dispatch, type SetStateAction, useRef} from "react";
import useOutsideClick from "../../../hooks/useOutsideClick.ts";
import Drawer from "../../../components/ui/Drawer/Drawer.tsx";
import closeBtn from "../../../assets/icons/closeBtn.svg";
import stylesCollectionsPage from "../../CollectionsPage/CollectionsPage.module.css"
import styles from "../DetailedCollectionPage/DetailedCollectionPage.module.css";
import DetailedTitle from "../../../components/Detailed/DetailedTitle.tsx";
import DetailedQuestionPageSidebar from "../DetailedQuestionPage/DetailedQuestionPageSidebar/DetailedQuestionPageSidebar.tsx";
import type {QuestionItem} from "../../../api/getQuestionsData.ts";

interface DetailedQuestionTitleProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  question: QuestionItem;
}

export default function DetailedQuestionTitle(
  {
    isSidebarOpen,
    setIsSidebarOpen,
    question
  }: DetailedQuestionTitleProps) {

  const detailedDrawerRef = useRef(null);
  const detailedSidebarButtonRef = useRef<HTMLButtonElement | null>(null);

  function sidebarClose() {
    setIsSidebarOpen(false);
  }

  useOutsideClick(detailedDrawerRef, sidebarClose, detailedSidebarButtonRef);

  return (
    <div className={`${styles.shadowWrapper} ${styles.titleWrapper}`}>
      <DetailedTitle
        item={question}
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

        <DetailedQuestionPageSidebar
          question={question}
          className={stylesCollectionsPage.fixedSidebar}
        />
      </Drawer>
    </div>
  )
}