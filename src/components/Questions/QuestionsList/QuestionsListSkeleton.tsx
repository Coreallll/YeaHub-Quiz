import styles from "../QuestionCard/QuestionCard.module.css";
import Skeleton from "../../ui/Skeleton/Skeleton.tsx";

export default function QuestionsListSkeleton() {
  return (
    <>
      {Array.from({length: 10}).map((_, index) => (
        <li key={index} className={styles.cardWrapper}>
          <h2 className={styles.questionTitle} >
            <Skeleton width={300} height={20} />
            <Skeleton width={20} height={20} />
          </h2>
        </li>
      ))}
    </>
  )
}