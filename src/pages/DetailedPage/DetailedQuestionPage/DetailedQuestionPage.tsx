import {useNavigate} from "react-router-dom";
import DetailedQuestionPageNavigate from "./DetailedQuestionPageNavigate.tsx";
import DetailedQuestionPageShortAnswer from "./DetailedQuestionPageShortAnswer.tsx";
import DetailedQuestionPageLongAnswer from "./DetailedQuestionPageLongAnswer.tsx";
import styles from "../../DetailedPage/DetailedCollectionPage/DetailedCollectionPage.module.css"
import DetailedQuestionPageSkeleton from "./DetailedQuestionPageSkeleton.tsx";
import arrowReturn from "../../../assets/icons/arrowReturn.svg";
import {useDetailedQuestionPage} from "../../../hooks/useDetailedQuestionPage.ts";
import DetailedQuestionPageSidebar from "./DetailedQuestionPageSidebar/DetailedQuestionPageSidebar.tsx";
import DetailedQuestionTitle from "./DetailedQuestionTitle.tsx";
import {useFiltersContext} from "../../../hooks/useFiltersContext.ts";
import {useQuestions} from "../../../hooks/useQuestions.ts";

export default function DetailedQuestionPage() {

  const navigate = useNavigate();

  const {
    isSidebarOpen,
    setIsSidebarOpen,
  } = useFiltersContext();

  const { questionsData } = useQuestions();

  const {
    question,
    isQuestionLoading,
    isPrevDisabled,
    isNextDisabled,
    prevQuestionId,
    nextQuestionId,
  } = useDetailedQuestionPage(questionsData);

  if (isQuestionLoading) {
    return (
      <DetailedQuestionPageSkeleton />
    )
  }

  if (!question) {
    return (
        <div className="wrapper">
          <div className="mainWrapper">
            <div>Вопрос не найден</div>
          </div>
        </div>
      )
  }

  return (
    <div className="wrapper">
      <button
        className={styles.returnBtn}
        onClick={() => navigate(-1)}
      >
        <img src={arrowReturn} alt="Стрелка назад"/>
        Назад
      </button>
      <div className="mainWrapper">
        <div className={styles.contentWrapper}>
          <DetailedQuestionTitle
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            question={question}
          />
          <DetailedQuestionPageNavigate
            isPrevDisabled={isPrevDisabled}
            isNextDisabled={isNextDisabled}
            prevQuestionId={prevQuestionId}
            nextQuestionId={nextQuestionId}
          />
          <DetailedQuestionPageShortAnswer question={question}/>
          <DetailedQuestionPageLongAnswer question={question} />
        </div>
        <DetailedQuestionPageSidebar
          question={question}
          isQuestionLoading={isQuestionLoading}
        />
      </div>
    </div>
  )
}