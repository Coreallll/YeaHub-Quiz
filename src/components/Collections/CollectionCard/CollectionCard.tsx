import styles from "./CollectionCard.module.css";
// import {useNavigate} from "react-router-dom";
import type {CollectionItem} from "../../../api/getColletionsData.ts";
import star from "../../../assets/icons/star.svg"
import question from "../../../assets/icons/question.svg"

interface CollectionCardProps {
  collection: CollectionItem;
}

export default function CollectionCard({ collection }: CollectionCardProps) {

  // const navigate = useNavigate();

  return (
    <li className={styles.cardWrapper}>
      <img
        className={styles.cardImg}
        src={collection.imageSrc ?? "/src/assets/images/collectionCardPlaceholder.png"}
        alt={collection.title}
      />
      <div className={styles.cardContent}>
        <ul className={styles.keywordsList}>
          {collection.keywords.map((keyword) => (
            <li key={keyword} className={styles.keyword}>{keyword}</li>
          ))}
        </ul>
        <h2 className={styles.cardTitle}>{collection.title}</h2>
        <div className={styles.cardLinks}>
          <a className={styles.cardLink} href="">
            <img src={star} alt=""/>
            <span>
              Для участников
            </span>
          </a>
          <a className={styles.cardLink} href="">
            <img src={question} alt=""/>
            <span>
              count вопросов
            </span>
          </a>
        </div>
        <ul className={styles.specList}>
          {collection.specializations.map((specialization) => (
            <li className={styles.cardSpec}>{specialization.title}</li>
          ))}
        </ul>
      </div>
    </li>

  )
};