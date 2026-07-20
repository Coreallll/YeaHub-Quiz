import styles from "../CollectionCard/CollectionCard.module.css";
import Skeleton from "../../ui/Skeleton/Skeleton.tsx";

export default function CollectionsListSkeleton() {
  return (
    <>
      {/*<a href="123" className={styles.cardWrapper}>*/}
      {/*  <img src={collection.imageSrc ?? "/images/collectionCardPlaceholder.png"} alt={collection.title} />*/}
      {/*  <div className={styles.cardContent}>*/}
      {/*    <ul>*/}
      {/*      {collection.keywords.map((keyword) => (*/}
      {/*        <li key={keyword}>{keyword}</li>*/}
      {/*      ))}*/}
      {/*    </ul>*/}
      {/*  </div>*/}
      {/*</a>*/}
      {Array.from({length: 10}).map((_, index) => (
        <li key={index} className={`${styles.cardWrapper} ${open ? styles.cardOpen : ""}`}>
          <Skeleton width={157} height={157} />
          <div className={styles.cardContent}>
            <Skeleton width={300} height={20} />
            <Skeleton width={20} height={20} />
          </div>
        </li>

      ))}
    </>
  )
}