import { useEffect } from "react";
import Skeleton from "../ui/Skeleton/Skeleton.tsx";
import styles from "./Questions.module.css";
import { useSpecFilter } from "../../hooks/useSpecFilter.ts";
import type { Collection } from "../../types/collectionTypes.ts";

interface QuestionsTitleProps {
  collection: Collection;
  isQuestionsLoading: boolean;
}

export default function QuestionsTitle({ collection, isQuestionsLoading }: QuestionsTitleProps) {
  const { specFilter } = useSpecFilter();

  const currentSpec = collection?.specializations?.find((spec) => spec.id === Number(specFilter));
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
