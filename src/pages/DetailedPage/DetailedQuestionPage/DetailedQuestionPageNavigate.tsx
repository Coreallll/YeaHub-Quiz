import styles from "../../DetailedPage/DetailedCollectionPage/DetailedCollectionPage.module.css";
import arrowLeft from "../../../assets/icons/arrowLeft.svg";
import arrowRight from "../../../assets/icons/arrowRight.svg";
import {useNavigate} from "react-router-dom";

interface DetailedQuestionPageNavigateProps {
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
  prevQuestionId: number;
  nextQuestionId: number;
}

export default function DetailedQuestionPageNavigate(
    {
      isPrevDisabled,
      isNextDisabled,
      prevQuestionId,
      nextQuestionId,
    }: DetailedQuestionPageNavigateProps) {

  const navigate = useNavigate();

  return (
    <div className={styles.shadowWrapper}>
      <div className={styles.buttonsFlex}>
        <button
          disabled={isPrevDisabled}
          className={`${styles.pageNavBtn} ${isPrevDisabled && styles.disabled}`}
          onClick={() => navigate(`/questions/${prevQuestionId}`)}
        >
          <img src={arrowLeft} alt="Стрелка влево"/>
          Предыдущий
        </button>
        <button
          disabled={isNextDisabled}
          className={`${styles.pageNavBtn} ${isNextDisabled && styles.disabled}`}
          onClick={() => navigate(`/questions/${nextQuestionId}`)}
        >
          Следующий
          <img src={arrowRight} alt="Стрелка вправо"/>
        </button>
      </div>
    </div>
  )
}