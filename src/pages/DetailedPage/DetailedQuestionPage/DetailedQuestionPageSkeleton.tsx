import styles from "../DetailedCollectionPage/DetailedCollectionPage.module.css";
import Skeleton from "../../../components/ui/Skeleton/Skeleton.tsx";
import stylesTitle from "../../../components/Detailed/DetailedTitle.module.css"

export default function DetailedQuestionPageSkeleton() {
  return (
    <div className={styles.contentWrapper}>
      <div className={`${styles.shadowWrapper} ${styles.titleWrapper}`}>
        <Skeleton width={160} height={160} borderRadius={12}/>
        <div className={stylesTitle.titleText}>
          <Skeleton height={28}/>
          <Skeleton height={80}/>
        </div>
      </div>
      <div className={styles.shadowWrapper}>
        <div className={styles.buttonsFlex}>
          <Skeleton width={166} height={48}/>
          <Skeleton width={166} height={48}/>
        </div>
      </div>
      <div className={`${styles.shadowWrapper} ${styles.flexColumn}`}>
        <Skeleton height={24}/>
        <Skeleton height={100}/>
      </div>
      <div className={`${styles.shadowWrapper} ${styles.flexColumn}`}>
        <Skeleton height={24}/>
        <Skeleton height={300}/>
        <div className={styles.alignCenter}>
          <Skeleton width={100} height={24}/>
        </div>
      </div>
    </div>
  )
}