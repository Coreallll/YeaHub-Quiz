import styles from "./DetailedCollectionPage.module.css";
import Questions from "../../../components/Questions/Questions.tsx";
import DetailedCollectionTitle from "./DetailedCollectionTitle.tsx";
import DetailedCollectionPageSidebar from "./DetailedCollectionPageSidebar.tsx";
import DetailedCollectionPageSkeleton from "./DetailedCollectionPageSkeleton.tsx";
import arrowReturn from "../../../assets/icons/arrowReturn.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useGetCollectionByIdQuery } from "../../../store/api/collectionByIdApi.ts";

export default function DetailedCollectionPage() {
  const navigate = useNavigate();

  const { collectionId } = useParams();
  const {
    data: collection,
    isLoading: isCollectionLoading,
    isError: isCollectionError,
  } = useGetCollectionByIdQuery(String(collectionId));

  if (isCollectionLoading) {
    return <DetailedCollectionPageSkeleton />;
  }
  if (isCollectionError) {
    return (
      <div className={styles.contentWrapper}>
        <div className={`${styles.shadowWrapper} ${styles.titleWrapper}`}>
          Ошибка при загрузке коллекции
        </div>
      </div>
    );
  }

  if (!collection) {
    return (
      <div className={styles.contentWrapper}>
        <div className={`${styles.shadowWrapper} ${styles.titleWrapper}`}>Контент не найден</div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <button
        className={styles.returnBtn}
        onClick={() => navigate(-1)}
      >
        <img
          src={arrowReturn}
          alt="Стрелка назад"
        />
        Назад
      </button>
      <div className="mainWrapper">
        <div className={styles.contentWrapper}>
          <DetailedCollectionTitle collection={collection} />
          <Questions collection={collection} />
        </div>
        <DetailedCollectionPageSidebar collection={collection} />
      </div>
    </div>
  );
}
