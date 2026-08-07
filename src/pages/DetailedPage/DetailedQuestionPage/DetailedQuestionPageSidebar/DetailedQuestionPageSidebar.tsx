import stylesSidebar from "../../../CollectionsPage/CollectionsSidebar/Sidebar.module.css";
import QuestionComplexity from "./QuestionComplexity.tsx";
import DetailedSidebarTags from "../../DetailedSidebar/DetailedSidebarTags.tsx";
import DetailedSidebarAuthor from "../../DetailedSidebar/DetailedSidebarAuthor.tsx";
import DetailedSidebarSkeleton from "../../DetailedSidebar/DetailedSidebarSkeleton.tsx";
import FilterSection from "../../../../components/Filters/FilterSection.tsx";
import type {QuestionItem} from "../../../../api/getQuestionsData.ts";

interface DetailedQuestionPageSidebarProps {
  question: QuestionItem | null;
  isQuestionLoading?: boolean;
  className?: string;
}

export default function DetailedQuestionPageSidebar(
  {
    question,
    isQuestionLoading,
    className =""
  }:DetailedQuestionPageSidebarProps) {

  return (
    <aside className={`${stylesSidebar.sidebar} ${className}`}>
      {isQuestionLoading ? (
        <DetailedSidebarSkeleton />
      ) : (
        question && (
          <>
            <QuestionComplexity question={question}/>
            <FilterSection
              title="Навыки:"
              items={question?.questionSkills}
              getValue={(skill) => skill.id}
              getLabel={(skill) => skill.title}
              inactive
            />
            <DetailedSidebarTags item={question} />
            <DetailedSidebarAuthor item={question} />
          </>
        )
      )}
    </aside>
  )
}