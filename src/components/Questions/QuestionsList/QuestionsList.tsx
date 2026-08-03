import {memo} from "react";
import QuestionCard from "../QuestionCard/QuestionCard.tsx";
import styles from "./QuestionsList.module.css";
import {useFiltersContext} from "../../../hooks/useFiltersContext.ts";
import QuestionsListSkeleton from "./QuestionsListSkeleton.tsx";
import type {QuestionItem} from "../../../api/getQuestionsData.ts";
import type {CollectionItem} from "../../../api/getColletionsData.ts";
import {useNavigate} from "react-router-dom";

interface QuestionListProps {
  collection: CollectionItem;
  questionsData: QuestionItem[];
  isQuestionsLoading: boolean;
  errorMessage: string;
}

export default memo(function QuestionsList(
  {
    collection,
    questionsData,
    isQuestionsLoading,
    errorMessage,
  }: QuestionListProps) {

  const {
    clearFilters,
  } = useFiltersContext();

  const navigate = useNavigate();

  return (
    <ul className={styles.questionList}>
      {errorMessage ? (
          <p>{errorMessage}</p>
        ) : isQuestionsLoading ? (
          <QuestionsListSkeleton />
        ) : (collection.isFree === false ? (
          <div className={styles.listEmpty}>
            <h2 className={styles.emptyTitle}>Контент предназначен только для участников</h2>
            <button
              className={styles.emptyBtn}
              onClick={() => navigate(-1)}
            >
              Вернуться назад
            </button>
          </div>
        ) : questionsData.length > 0 ? (
            questionsData.map((question) => (
              <QuestionCard key={question.id} question={question}/>
            ))
          ) : (
            <div className={styles.listEmpty}>
              <h2 className={styles.emptyTitle}>По запросу ничего не найдено</h2>
              <button
                className={styles.emptyBtn}
                onClick={() => clearFilters()}
              >
                Сбросить фильтры
              </button>
            </div>
          )
        )
      }
    </ul>
  )
})