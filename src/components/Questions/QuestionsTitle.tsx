import {useEffect} from "react";
import Skeleton from "../ui/Skeleton/Skeleton.tsx";
import styles from "./Questions.module.css";
import {useFiltersContext} from "../../hooks/useFiltersContext.ts";
import type {Filter} from "../../api/getFilters.ts";

interface QuestionsTitleProps {
  specs: Filter[];
  isQuestionsLoading: boolean;
}

export default function QuestionsTitle(
  {
    specs,
    isQuestionsLoading,
  }: QuestionsTitleProps
) {

  const { specFilter } = useFiltersContext();

  const currentSpec = specs.find(spec => spec.id === Number(specFilter));
  const specTitle = currentSpec?.title;

  useEffect(() => {
    if (isQuestionsLoading) return;

    document.title = specTitle
      ? `Вопросы ${specTitle}`
      : 'Вопросы не найдены';
  }, [specTitle, isQuestionsLoading]);

  return (
    <div className={styles.contentTitle}>
      {isQuestionsLoading ? (
        <Skeleton width={300} height={24} />
      ) : (
        <h1 className={styles.mainTitle}>Вопросы {specTitle}</h1>
      )}
    </div>
  )
}