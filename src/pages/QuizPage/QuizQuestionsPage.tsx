import styles from "./QuizPage.module.css";

export default function QuizQuestionsPage() {
  return (
    <div className={styles.quizWrapper}>
      <div className={styles.questionsNav}>
        <button>Назад</button>
        <button>Далее</button>
      </div>
    </div>
  );
}
