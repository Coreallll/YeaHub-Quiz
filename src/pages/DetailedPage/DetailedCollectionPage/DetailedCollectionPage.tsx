import {useFiltersContext} from "../../../hooks/useFiltersContext.ts";
import styles from "./DetailedCollectionPage.module.css"
import Questions from "../../../components/Questions/Questions.tsx";
import DetailedCollectionTitle from "./DetailedCollectionTitle.tsx";
import {useQuestions} from "../../../hooks/useQuestions.ts";
import DetailedCollectionPageSidebar from "./DetailedCollectionPageSidebar.tsx";
import useDetailedCollectionPage from "../../../hooks/useDetailedCollectionPage.ts";
import DetailedCollectionPageSkeleton from "./DetailedCollectionPageSkeleton.tsx";
import {useSidebarCollectionSpecsFiltersData} from "../../../hooks/useSidebarCollectionSpecsFiltersData.ts";
import arrowReturn from "../../../assets/icons/arrowReturn.svg";
import {useNavigate} from "react-router-dom";

export default function DetailedCollectionPage() {

  const navigate = useNavigate();

  const {
    isSidebarOpen,
    setIsSidebarOpen,
  } = useFiltersContext();

  const { collection, isCollectionLoading } = useDetailedCollectionPage();

  const {collectionSpecs} = useSidebarCollectionSpecsFiltersData();

  const {
    questionsData,
    errorMessage,
    totalQuestionsPages,
    isQuestionsLoading
  } = useQuestions();

  if (isCollectionLoading) {
    return (
      <DetailedCollectionPageSkeleton />
    )
  }

  if (!collection) {
    return (
      <div className={styles.contentWrapper}>
        <div className={`${styles.shadowWrapper} ${styles.titleWrapper}`}>
          Контент не найден
        </div>
      </div>
    )
  }

  return (
    <div className="wrapper">
      <button
        className={styles.returnBtn}
        onClick={() => navigate(-1)}
      >
        <img src={arrowReturn} alt="Стрелка назад"/>
        Назад
      </button>
      <div className="mainWrapper">
        <div className={styles.contentWrapper}>
          <DetailedCollectionTitle
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            collectionSpecs={collectionSpecs}
            collection={collection}
          />
          <Questions
            collection={collection}
            collectionSpecs={collectionSpecs}
            questionsData={questionsData}
            errorMessage={errorMessage}
            totalQuestionsPages={totalQuestionsPages}
            isQuestionsLoading={isQuestionsLoading}
          />
        </div>
        <DetailedCollectionPageSidebar
          collectionSpecs={collectionSpecs}
          collection={collection}
        />
      </div>
    </div>
  )
}