import RenderAnswer from "../../../components/Questions/QuestionCard/RenderAnswer.tsx";
import stylesCard from "../../../components/questions/QuestionCard/QuestionCard.module.css";
import styles from "../../DetailedPage/DetailedCollectionPage/DetailedCollectionPage.module.css";
import type {QuestionProps} from "./DetailedQuestionPageSidebar/QuestionComplexity.tsx";

export default function DetailedQuestionPageShortAnswer({ question }: QuestionProps) {
  return (
    <div className={styles.shadowWrapper}>
      <h2 className={styles.answerTitle}>Краткий ответ</h2>
      <div className={stylesCard.answer}>
        <RenderAnswer answer={question?.shortAnswer}/>
      </div>
    </div>
  )
}