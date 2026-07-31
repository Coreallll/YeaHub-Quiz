import stylesSidebar from "../../../CollectionsPage/CollectionsSidebar/Sidebar.module.css";
import stylesCard from "../../../../components/Questions/QuestionCard/QuestionCard.module.css";
import styles from "./DetailedQuestionPageSidebar.module.css"
import type {QuestionItem} from "../../../../api/getQuestionsData.ts";

export type QuestionProps = {
  question: QuestionItem
}

export default function QuestionComplexity({question}: QuestionProps ) {
  return (
    <section className={stylesSidebar.section}>
      <h3 className={stylesSidebar.sectionTitle}>Уровень:</h3>
      <div className={`${stylesCard.rating} ${styles.ratingWrapper}`}>
        <div className={stylesCard.ratingWrap}>
          <span className={stylesCard.ratingText}>Сложность: </span>
          <span className={stylesCard.ratingValue}>{question.complexity}</span>
        </div>
        <div className={stylesCard.ratingWrap}>
          <span className={stylesCard.ratingText}>Рейтинг: </span>
          <span className={stylesCard.ratingValue}>{question.rate}</span>
        </div>
      </div>
    </section>
  )
}