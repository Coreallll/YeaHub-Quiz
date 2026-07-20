import {memo} from "react";
import CollectionCard from "../CollectionCard/CollectionCard.tsx";
import styles from "./CollectionList.module.css";
import {useFiltersContext} from "../../../hooks/useFiltersContext.ts";
import CollectionsListSkeleton from "./CollectionsListSkeleton.tsx";
import type {CollectionItem} from "../../../api/getColletionsData.ts";

interface CollectionsListProps {
  collectionsData: CollectionItem[];
  isCollectionsLoading: boolean;
  errorMessage?: string;
  debounceKeywords?: string;
}

export default memo(function CollectionsList(
  {
    collectionsData,
    isCollectionsLoading,
    errorMessage,
    debounceKeywords,
  }: CollectionsListProps) {

  const {
    searchValue,
    clearFilters,
  } = useFiltersContext();

  const isDebouncing = searchValue !== debounceKeywords;

  return (
    <div className={styles.collectionsList}>
      {errorMessage ? (
          <p>{errorMessage}</p>
        ) : isCollectionsLoading || isDebouncing ? (
          <CollectionsListSkeleton />
        ) : (
          (collectionsData.length > 0 ? (
            collectionsData.map((collection) => (
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