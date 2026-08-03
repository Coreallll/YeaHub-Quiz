import {memo} from "react";
import CollectionCard from "../CollectionCard/CollectionCard.tsx";
import styles from "./CollectionList.module.css";
import CollectionsListSkeleton from "./CollectionsListSkeleton.tsx";
import type {CollectionItem} from "../../../api/getColletionsData.ts";

interface CollectionsListProps {
  collectionsData: CollectionItem[];
  isCollectionsLoading: boolean;
  errorMessage?: string;
  clearFilters: (nextSpec?: string) => void;
}

export default memo(function CollectionsList(
  {
    collectionsData,
    isCollectionsLoading,
    errorMessage,
    clearFilters,
  }: CollectionsListProps) {

  return (
    <div className={styles.collectionsList}>
      {errorMessage ? (
          <p>{errorMessage}</p>
        ) : isCollectionsLoading ? (
          <CollectionsListSkeleton />
        ) : (
          (collectionsData.length > 0 ? (
            collectionsData
              .filter((collection) => collection.questionsCount > 0)
              .map((collection) => (
              <CollectionCard key={collection.id} collection={collection}/>
            ))
          ) : (
            <div className={styles.listEmpty}>
              <h2 className={styles.emptyTitle}>По запросу ничего не найдено</h2>
              <button
                className={styles.clearFilter}
                onClick={() => clearFilters()}
              >
                Сбросить фильтры
              </button>
            </div>
          ))
        )
      }
    </div>
  )
})