import { useNavigate, useParams } from "react-router-dom";
import DetailedQuestionPageNavigate from "./DetailedQuestionPageNavigate.tsx";
import DetailedQuestionPageShortAnswer from "./DetailedQuestionPageShortAnswer.tsx";
import DetailedQuestionPageLongAnswer from "./DetailedQuestionPageLongAnswer.tsx";
import styles from "../../DetailedPage/DetailedCollectionPage/DetailedCollectionPage.module.css";
import DetailedQuestionPageSkeleton from "./DetailedQuestionPageSkeleton.tsx";
import arrowReturn from "../../../assets/icons/arrowReturn.svg";
import DetailedQuestionPageSidebar from "./DetailedQuestionPageSidebar/DetailedQuestionPageSidebar.tsx";
import DetailedQuestionTitle from "./DetailedQuestionTitle.tsx";
import { useQuestionNav } from "../../../hooks/useQuestionsNav.ts";
import { useGetQuestionByIdQuery } from "../../../store/api/questionByIdApi.ts";
import { useGetDetailedQuestionsQuery } from "../../../store/api/questionsApi.ts";
import { useCollectionFilters } from "../../../hooks/useCollectionFilters.ts";

export default function DetailedQuestionPage() {
  const navigate = useNavigate();

  const { specFilter } = useCollectionFilters();
  const { collectionId } = useParams();
  const { questionId } = useParams();

  const { data: allDetailedQuestions = [] } = useGetDetailedQuestionsQuery({
    specFilter,
    collectionId: Number(collectionId),
  });

  const { data: question, isLoading: isQuestionLoading } = useGetQuestionByIdQuery(
    Number(questionId),
  );
  const { isPrevDisabled, isNextDisabled, prevQuestionId, nextQuestionId } = useQuestionNav(
    allDetailedQuestions,
    Number(questionId),
  );

  if (isQuestionLoading) {
    return <DetailedQuestionPageSkeleton />;
  }

  if (!question) {
    return (
      <div className="wrapper">
        <div className="mainWrapper">
          <div>Вопрос не найден</div>
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <button
        className={styles.returnBtn}
        onClick={() => navigate(`/collections/${collectionId}`)}
      >
        <img
          src={arrowReturn}
          alt="Стрелка назад"
        />
        Назад
      </button>
      <div className="mainWrapper">
        <div className={styles.contentWrapper}>
          <DetailedQuestionTitle question={question} />
          <DetailedQuestionPageNavigate
            isPrevDisabled={isPrevDisabled}
            isNextDisabled={isNextDisabled}
            prevQuestionId={prevQuestionId}
            nextQuestionId={nextQuestionId}
          />
          <DetailedQuestionPageShortAnswer question={question} />
          <DetailedQuestionPageLongAnswer question={question} />
        </div>
        <DetailedQuestionPageSidebar
          question={question}
          isQuestionLoading={isQuestionLoading}
        />
      </div>
    </div>
  );
}
