import stylesQuestions from "./Questions.module.css";
import Skeleton from "../ui/Skeleton/Skeleton.tsx";
import QuestionsListSkeleton from "./QuestionsList/QuestionsListSkeleton.tsx";
import stylesQuestionList from "../Questions/QuestionsList/QuestionsList.module.css";

export default function QuestionsSkeleton() {
  return (
    <>
      <Skeleton width={300} height={24} />
      <hr className={stylesQuestions.divider}/>
      <ul className={stylesQuestionList.questionList}>
        <QuestionsListSkeleton />
      </ul>
    </>
  )
}