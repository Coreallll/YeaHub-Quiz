import {useFiltersContext} from "../../../hooks/useFiltersContext.ts";
import styles from "./DetailedCollectionPage.module.css"
import Questions from "../../../components/Questions/Questions.tsx";
import {useSidebarFiltersData} from "../../../hooks/useSidebarFiltersData.ts";
import DetailedCollectionTitle from "./DetailedCollectionsTitle.tsx";
import {useQuestions} from "../../../hooks/useQuestions.ts";
import DetailedCollectionSidebar from "../DetailedSidebar/DetailedCollectionSidebar.tsx";
import useDetailedCollectionPage from "../../../hooks/useDetailedCollectionPage.ts";

export default function DetailedCollectionPage() {

  const {
    isSidebarOpen,
    setIsSidebarOpen,
  } = useFiltersContext();

  const { collection, isCollectionLoading } = useDetailedCollectionPage();

  const {specs} = useSidebarFiltersData();

  const {
    questionsData,
    errorMessage,
    totalQuestionsPages,
    isQuestionsLoading
  } = useQuestions();

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
      {isCollectionLoading ? (
         <DetailedCollectionSkeleton />
        ) : (
        <>
          <div className={styles.contentWrapper}>
            <DetailedCollectionTitle
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
              isQuestionsLoading={isQuestionsLoading}
              specs={specs}
              collection={collection}
            />
            <Questions
              specs={specs}
              questionsData={questionsData}
              errorMessage={errorMessage}
              totalQuestionsPages={totalQuestionsPages}
              isQuestionsLoading={isQuestionsLoading}
            />
          </div>
          <DetailedCollectionSidebar
            specs={specs}
            collection={collection}
            isQuestionsLoading={isQuestionsLoading}
          />
        </>
      )}
    </div>
  )
}