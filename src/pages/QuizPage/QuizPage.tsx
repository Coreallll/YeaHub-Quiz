import QuizSpecializations from "../../components/Quiz/Filters/QuizSpecializations.tsx";
import QuizComplexity from "../../components/Quiz/Filters/QuizComplexity.tsx";
import QuizSkills from "../../components/Quiz/Filters/QuizSkills.tsx";
import QuizQuestionsLimit from "../../components/Quiz/Filters/QuizQuestionsLimit.tsx";
import styles from "./QuizPage.module.css";
import { FormProvider } from "react-hook-form";
import ArrowRight from "../../assets/icons/quizArrowRightBtn.svg?react";
import { useQuizForm } from "../../hooks/useQuizForm.ts";

export interface QuizFormValues {
  specialization: number;
  skills: number[];
  complexity: number[];
  limit: number;
}

export default function QuizPage() {
  const { methods, onSubmit } = useQuizForm();

  return (
    <div className={styles.quizWrapper}>
      <h2 className={styles.quizPageTitle}>Собеседование</h2>
      <form
        className={styles.quizForm}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <FormProvider {...methods}>
          <div className={styles.fetchBlocks}>
            <QuizSpecializations />
            <QuizSkills />
          </div>
          <div className={styles.staticBlocks}>
            <QuizComplexity />
            <QuizQuestionsLimit />
          </div>
        </FormProvider>
        <button
          className={styles.sumbitBtn}
          type="submit"
        >
          Начать
          <ArrowRight />
        </button>
      </form>
    </div>
  );
}
