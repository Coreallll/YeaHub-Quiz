import { useEffect } from "react";
import Skeleton from "../ui/Skeleton/Skeleton.tsx";
import styles from "./Questions.module.css";
import type { Collection } from "../../store/api/collectionsApi.ts";
import { useSpecFilter } from "../../hooks/useSpecFilter.ts";

interface QuestionsTitleProps {
  collection: Collection;
  isQuestionsLoading: boolean;
}

export default function QuestionsTitle({ collection, isQuestionsLoading }: QuestionsTitleProps) {
  const { specFilter } = useSpecFilter();

  const currentSpec = collection?.specializations?.find((spec) => spec.id === String(specFilter));
  const specTitle = currentSpec?.title;

  useEffect(() => {
    if (isQuestionsLoading) return;

    document.title = specTitle ? `Вопросы ${specTitle}` : "Вопросы не найдены";
  }, [specTitle, isQuestionsLoading]);

  return (
    <div className={styles.contentTitle}>
      {isQuestionsLoading ? (
        <Skeleton
          width={300}
          height={24}
        />
      ) : (
        <h1 className={styles.mainTitle}>Вопросы {specTitle}</h1>
      )}
    </div>
  );
}
