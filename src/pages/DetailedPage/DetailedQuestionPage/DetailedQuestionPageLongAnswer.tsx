import RenderAnswer from "../../../components/Questions/QuestionCard/RenderAnswer.tsx";
import stylesCard from "../../../components/questions/QuestionCard/QuestionCard.module.css";
import styles from "../../DetailedPage/DetailedCollectionPage/DetailedCollectionPage.module.css";
import {useEffect, useRef, useState} from "react";
import arrowDown from "../../../assets/icons/arrowDown.svg";
import type {QuestionProps} from "./DetailedQuestionPageSidebar/QuestionComplexity.tsx";

export default function DetailedQuestionPageLongAnswer({ question }: QuestionProps) {

  const [openAnswer, setOpenAnswer] = useState(false);
  const longAnswerRef = useRef<HTMLDivElement>(null);
  const [heightAnswer, setHeightAnswer] = useState(400);

  useEffect(() => {
    if (!longAnswerRef.current) return;
    setHeightAnswer(openAnswer ? longAnswerRef.current.scrollHeight : 400);
  }, [openAnswer]);

  return (
    <div className={styles.shadowWrapper}>
      <h2 className={styles.answerTitle}>Развернутый ответ</h2>
      <div
        ref={longAnswerRef}
        className={`${stylesCard.answer} ${styles.longAnswerWrapper}`}
        style={{
          height:`${heightAnswer}px`
        }}
      >
        <RenderAnswer answer={question.longAnswer}/>
        {!openAnswer && <div className={styles.gradient}></div>}
      </div>
      <button
        className={`${styles.openBtn} ${openAnswer && styles.active}`}
        onClick={() => setOpenAnswer(prev => !prev)}
      >
        {!openAnswer ? (
          <span>Развернуть</span>
        ) : (
          <span>Свернуть</span>
        )}
        <img className={`${styles.iconArrowDown} ${openAnswer && styles.active}`} src={arrowDown} alt="Стрелка"/>
      </button>
    </div>
  )
}