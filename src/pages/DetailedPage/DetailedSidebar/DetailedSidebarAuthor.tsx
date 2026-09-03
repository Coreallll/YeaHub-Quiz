import stylesSidebar from "../../CollectionsPage/CollectionsSidebar/Sidebar.module.css";
import styles from "./DetailedSidebar.module.css";
import type { Collection } from "../../../types/collectionTypes.ts";
import type { Question } from "../../../types/questionTypes.ts";

interface SidebarAuthorProps {
  item: Collection | Question | null;
}

export default function DetailedSidebarAuthor({ item }: SidebarAuthorProps) {
  return (
    <section className={stylesSidebar.section}>
      <h3 className={styles.author}>
        <span className={styles.authorTitle}>Автор:</span>
        <span className={styles.authorName}>{item?.createdBy?.username}</span>
      </h3>
    </section>
  );
}
