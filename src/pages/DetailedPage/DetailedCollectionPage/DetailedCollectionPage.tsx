import {useFiltersContext} from "../../../hooks/useFiltersContext.ts";
import styles from "./DetailedCollectionPage.module.css"
import Questions from "../../../components/Questions/Questions.tsx";
import DetailedCollectionTitle from "./DetailedCollectionTitle.tsx";
import {useQuestions} from "../../../hooks/useQuestions.ts";
import DetailedCollectionPageSidebar from "./DetailedCollectionPageSidebar.tsx";
import useDetailedCollectionPage from "../../../hooks/useDetailedCollectionPage.ts";
import DetailedCollectionPageSkeleton from "./DetailedCollectionPageSkeleton.tsx";
import {useSidebarCollectionSpecsFiltersData} from "../../../hooks/useSidebarCollectionSpecsFiltersData.ts";

export default function DetailedCollectionPage() {

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
  )
}