import QuestionsTitle from "./QuestionsTitle.tsx";
import QuestionsList from "./QuestionsList/QuestionsList.tsx";
import styles from "./Questions.module.css";
import stylesQuestionsList from "../Questions/QuestionsList/QuestionsList.module.css";
import Pagination from "../ui/Pagination/Pagination.tsx";
import { usePagination } from "../../hooks/usePagination.ts";
import { useQuestions } from "../../hooks/useQuestions.ts";
import type { Collection } from "../../types/collectionTypes.ts";
import QuestionsListSkeleton from "./QuestionsList/QuestionsListSkeleton.tsx";
import { useNavigate } from "react-router-dom";

export interface QuestionsProps {
  collection: Collection;
}

export default function Questions({ collection }: QuestionsProps) {
  const { questionsData, isQuestionError, totalQuestionsPages, isQuestionsLoading } =
    useQuestions();

  const { currentPage, handleNextPage, handlePrevPage, handlePageClick } =
    usePagination(totalQuestionsPages);

  const navigate = useNavigate();

  return (
    <div className="mainContent">
      <QuestionsTitle
        collection={collection}
        isQuestionsLoading={isQuestionsLoading}
      />
      <hr className={styles.divider} />
      {isQuestionError ? (
        <p>При загрузке вопросов произошла ошибка</p>
      ) : isQuestionsLoading ? (
        <QuestionsListSkeleton />
      ) : collection.isFree === false ? (
        <ul className={stylesQuestionsList.questionList}>
          <div className={stylesQuestionsList.listEmpty}>
            <h2 className={stylesQuestionsList.emptyTitle}>
              Контент предназначен только для участников
            </h2>
            <button
              className={stylesQuestionsList.emptyBtn}
              onClick={() => navigate(-1)}
            >
              Вернуться назад
            </button>
          </div>
        </ul>
      ) : (
        <>
          <QuestionsList questionsData={questionsData} />
          <Pagination
            isQuestionsLoading={isQuestionsLoading}
            currentPage={currentPage}
            totalPages={totalQuestionsPages}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            handlePageClick={handlePageClick}
          />
        </>
      )}
    </div>
  );
}
