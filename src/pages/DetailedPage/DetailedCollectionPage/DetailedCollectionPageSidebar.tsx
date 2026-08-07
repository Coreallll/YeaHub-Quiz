import stylesSidebar from "../../CollectionsPage/CollectionsSidebar/Sidebar.module.css";
import {useFiltersContext} from "../../../hooks/useFiltersContext.ts";
import FilterSection from "../../../components/Filters/FilterSection.tsx";
import DetailedSidebarAuthor from "../DetailedSidebar/DetailedSidebarAuthor.tsx";
import type {CollectionItem} from "../../../api/getColletionsData.ts";
import DetailedSidebarTags from "../DetailedSidebar/DetailedSidebarTags.tsx";
import type {CollectionSpec} from "../../../api/getCollectionSpecsFilters.ts";

interface DetailedCollectionSidebarProps {
  collection: CollectionItem;
  className?: string;
  collectionSpecs: CollectionSpec[];
}

export default function DetailedCollectionPageSidebar(
  {
    collection,
    collectionSpecs,
    className =""
  }: DetailedCollectionSidebarProps) {

  const {
    specFilter,
    clearFilters,
  } = useFiltersContext();

  return (
    <aside className={`${stylesSidebar.sidebar} ${className}`}>
      {collectionSpecs.length > 0 &&
        <FilterSection
          title="Специализация"
          items={collectionSpecs}
          activeValue={specFilter}
          setFilter={(spec) => {
            clearFilters(String(spec.id));
          }}
          getLabel={(spec) => spec.title}
          getValue={(spec) => spec.id}
          showAllBtn
        />
      }
      <FilterSection
        title="Доступ"
        inactive
        isFree={collection.isFree}
      />
      {collection.company &&
        <FilterSection
          title="Компания"
          items={[collection.company]}
          getValue={(company) => company.id}
          getLabel={(company) => company.title}
          getImageSrc={(company) => company.imageSrc}
          inactive
        />
      }
      {collection.questionsCount > 0 &&
        <FilterSection
          title="Количество вопросов"
          inactive
          questionsCount={collection.questionsCount}
        />
      }
      {collection.keywords &&
        <DetailedSidebarTags item={collection} />
      }
      {collection.createdBy &&
        <DetailedSidebarAuthor item={collection} />
      }
    </aside>
  )
}