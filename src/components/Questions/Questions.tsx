import QuestionsTitle from "./QuestionsTitle.tsx";
import type {Filter} from "../../api/getFilters.ts";
import QuestionsList from "./QuestionsList/QuestionsList.tsx";
import styles from "./Questions.module.css";
import Pagination from "../ui/Pagination/Pagination.tsx";
import {usePagination} from "../../hooks/usePagination.ts";
import type {QuestionItem} from "../../api/getQuestionsData.ts";

export interface QuestionsProps {
  specs: Filter[];
  questionsData: QuestionItem[];
  errorMessage: string;
  totalQuestionsPages: number;
  isQuestionsLoading: boolean;
}

export default function Questions(
  {
    specs,
    questionsData,
    errorMessage,
    totalQuestionsPages,
    isQuestionsLoading
  }:QuestionsProps) {


  const {
    currentPage,
    handleNextPage,
    handlePrevPage,
    handlePageClick,
  } = usePagination(totalQuestionsPages);

  return (
    <div className="mainContent">
      <QuestionsTitle
        specs={specs}
        isQuestionsLoading={isQuestionsLoading}
      />
      <hr className={styles.divider}/>
      <QuestionsList
        questionsData={questionsData}
        isQuestionsLoading={isQuestionsLoading}
        errorMessage={errorMessage}
      />

      <Pagination
        isQuestionsLoading={isQuestionsLoading}
        currentPage={currentPage}
        totalPages={totalQuestionsPages}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
      />
    </div>
  )
}