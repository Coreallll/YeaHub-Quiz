import stylesSidebar from "../../CollectionsPage/CollectionsSidebar/Sidebar.module.css";
import styles from "./DetailedSidebar.module.css";
import type {CollectionItem} from "../../../api/getColletionsData.ts";
import type {QuestionItem} from "../../../api/getQuestionsData.ts";

interface SidebarAuthorProps {
  item: CollectionItem | QuestionItem;
}

export default function SidebarAuthor({ item }:SidebarAuthorProps) {
  return (
    <section className={stylesSidebar.section}>
      <h3 className={styles.author}>
        <span className={styles.authorTitle}>Автор:</span>
        <span className={styles.authorName}>{item?.createdBy?.username}</span>
      </h3>
    </section>
  )
}