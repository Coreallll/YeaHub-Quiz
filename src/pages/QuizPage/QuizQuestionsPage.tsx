import styles from "./QuizPage.module.css";
import { useQuizQuestions } from "../../hooks/useQuizQuestions.ts";
import RenderAnswer from "../../components/Questions/QuestionCard/RenderAnswer.tsx";
import { setCurrentQuestionId } from "../../components/Quiz/quizSlice.ts";
import { useAppDispatch } from "../../hooks/hooks.ts";
import { useQuestionNav } from "../../hooks/useQuestionsNav.ts";

export default function QuizQuestionsPage() {
  const {
    questions,
    currentQuestion,
    currentQuestionId,
    isQuizQuestionsLoading,
    isQuizQuestionsError,
  } = useQuizQuestions();

  const { isPrevDisabled, isNextDisabled, prevQuestionId, nextQuestionId } = useQuestionNav(
    questions,
    Number(currentQuestionId),
  );

  const dispatch = useAppDispatch();

  function handlePrevQuestion() {
    if (prevQuestionId === null) return;
    dispatch(setCurrentQuestionId(prevQuestionId));
  }
  function handleNextQuestion() {
    if (nextQuestionId === null) return;
    dispatch(setCurrentQuestionId(nextQuestionId));
  }

  if (isQuizQuestionsLoading) {
    return <p>Загрузка...</p>;
  }
  if (!currentQuestion || isQuizQuestionsError) {
    return <p>Ошибка при загрузке вопроса</p>;
  }

  return (
    <div className={styles.quizWrapper}>
      <div className={styles.questionsNav}>
        <button
          disabled={isPrevDisabled}
          className={`${styles.quizNavBtn} ${isPrevDisabled ? styles.disabled : ""}`}
          onClick={handlePrevQuestion}
        >
          Назад
        </button>
        <button
          disabled={isNextDisabled}
          className={`${styles.quizNavBtn} ${isNextDisabled && styles.disabled}`}
          onClick={handleNextQuestion}
        >
          Далее
        </button>
      </div>
      <h2>{currentQuestion.title}</h2>
      <RenderAnswer answer={currentQuestion.shortAnswer} />
    </div>
  );
}
