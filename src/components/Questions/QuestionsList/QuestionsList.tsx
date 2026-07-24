import {memo} from "react";
import QuestionCard from "../QuestionCard/QuestionCard.tsx";
import styles from "./QuestionsList.module.css";
import {useFiltersContext} from "../../../hooks/useFiltersContext.ts";
import QuestionsListSkeleton from "./QuestionsListSkeleton.tsx";
import type {QuestionItem} from "../../../api/getQuestionsData.ts";

interface QuestionListProps {
  questionsData: QuestionItem[];
  isQuestionsLoading: boolean;
  errorMessage: string;
}

export default memo(function QuestionsList(
  {
    questionsData,
    isQuestionsLoading,
    errorMessage,
  }: QuestionListProps) {

  const {
    clearFilters,
  } = useFiltersContext();

  return (
    <ul className={styles.questionList}>
      {errorMessage ? (
          <p>{errorMessage}</p>
        ) : isQuestionsLoading ? (
          <QuestionsListSkeleton />
        ) : (
          (questionsData.length > 0 ? (
            questionsData.map((question) => (
              <QuestionCard key={question.id} question={question}/>
            ))
          ) : (
            <div className={styles.listEmpty}>
              <h2 className={styles.emptyTitle}>По запросу ничего не найдено</h2>
              <button
                className={styles.clearFilter}
                onClick={() => clearFilters()}
              >
                Сбросить фильтры
              </button>
            </div>
          ))
        )
      }
    </ul>
  )
})