import { useFormContext } from "react-hook-form";
import type { QuizFormValues } from "../../../pages/QuizPage/QuizPage.tsx";
import styles from "./QuizFilters.module.css";

export default function QuizQuestionsLimit() {
  const { watch, setValue } = useFormContext<QuizFormValues>();
  const quizQuestionsLimit = watch("questionsLimit");

  function countDecrement() {
    if (quizQuestionsLimit <= 1) return;
    setValue("questionsLimit", quizQuestionsLimit - 1);
  }
  function countIncrement() {
    setValue("questionsLimit", quizQuestionsLimit + 1);
  }

  return (
    <section>
      <h3 className={styles.sectionTitle}>Количество вопросов</h3>
      <div className={styles.counter}>
        <button
          className={styles.counterBtn}
          onClick={countDecrement}
        >
          -
        </button>
        <span className={styles.counterNumber}>{quizQuestionsLimit}</span>
        <button
          className={styles.counterBtn}
          onClick={countIncrement}
        >
          +
        </button>
      </div>
    </section>
  );
}
