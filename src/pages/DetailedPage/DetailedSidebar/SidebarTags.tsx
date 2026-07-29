import stylesSidebar from "../../CollectionsPage/CollectionsSidebar/Sidebar.module.css";
import styles from "./DetailedSidebar.module.css"
import type {CollectionItem} from "../../../api/getColletionsData.ts";
import type {QuestionItem} from "../../../api/getQuestionsData.ts";

interface SidebarTagsProps {
  item: CollectionItem | QuestionItem;
}

export default function SidebarTags({ item }: SidebarTagsProps) {
  return (
    <section className={stylesSidebar.section}>
      <h3 className={stylesSidebar.sectionTitle}>Ключевые слова:</h3>
      <ul className={styles.keywordList}>
        {item?.keywords.map(keyword => (
          <li>
            <span className={styles.keyword}>#{keyword}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}