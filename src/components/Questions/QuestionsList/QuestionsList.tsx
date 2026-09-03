import { memo } from "react";
import QuestionCard from "../QuestionCard/QuestionCard.tsx";
import styles from "./QuestionsList.module.css";
import type { Question } from "../../../types/questionTypes.ts";
import { useClearFilters } from "../../../hooks/useClearFilters.ts";

interface QuestionListProps {
  questionsData: Question[];
}

export default memo(function QuestionsList({ questionsData }: QuestionListProps) {
  const clearFilters = useClearFilters();

  return (
    <ul className={styles.questionList}>
      {questionsData.length > 0 ? (
        questionsData.map((question) => (
          <QuestionCard
            key={question.id}
            question={question}
          />
        ))
      ) : (
        <div className={styles.listEmpty}>
          <h2 className={styles.emptyTitle}>По запросу ничего не найдено</h2>
          <button
            className={styles.emptyBtn}
            onClick={clearFilters}
          >
            Сбросить фильтры
          </button>
        </div>
      )}
    </ul>
  );
});
