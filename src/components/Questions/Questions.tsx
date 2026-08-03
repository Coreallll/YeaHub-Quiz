import QuestionsTitle from "./QuestionsTitle.tsx";
import QuestionsList from "./QuestionsList/QuestionsList.tsx";
import styles from "./Questions.module.css";
import Pagination from "../ui/Pagination/Pagination.tsx";
import {usePagination} from "../../hooks/usePagination.ts";
import type {QuestionItem} from "../../api/getQuestionsData.ts";
import type {CollectionSpec} from "../../api/getCollectionSpecsFilters.ts";
import type {CollectionItem} from "../../api/getColletionsData.ts";

export interface QuestionsProps {
  collection: CollectionItem;
  collectionSpecs: CollectionSpec[];
  questionsData: QuestionItem[];
  errorMessage: string;
  totalQuestionsPages: number;
  isQuestionsLoading: boolean;
}

export default function Questions(
  {
    collection,
    collectionSpecs,
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
        collectionSpecs={collectionSpecs}
        isQuestionsLoading={isQuestionsLoading}
      />
      <hr className={styles.divider}/>
      <QuestionsList
        collection={collection}
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