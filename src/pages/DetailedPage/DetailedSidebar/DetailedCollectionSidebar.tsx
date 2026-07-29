import stylesSidebar from "../../CollectionsPage/CollectionsSidebar/Sidebar.module.css";
import FilterSpecializations from "../../../components/Filters/FilterSpecializations.tsx";
import type {Filter} from "../../../api/getFilters.ts";
import {useFiltersContext} from "../../../hooks/useFiltersContext.ts";
import FilterSection from "../../../components/Filters/FilterSection.tsx";
import SidebarAuthor from "./SidebarAuthor.tsx";
import type {CollectionItem} from "../../../api/getColletionsData.ts";
import SidebarTags from "./SidebarTags.tsx";

interface DetailedCollectionSidebarProps {
  collection: CollectionItem;
  className?: string;
  specs: Filter[];
}

export default function DetailedCollectionSidebar(
  {
    collection,
    specs,
    className =""
  }: DetailedCollectionSidebarProps) {

  const {
    searchParams,
    setSearchParams,

    specFilter,
    clearFilters,

  } = useFiltersContext();

  return (
    <aside className={`${stylesSidebar.sidebar} ${className}`}>
      <FilterSpecializations
        specs={specs}
        specFilter={specFilter}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        clearFilters={clearFilters}
      />
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
        <SidebarTags item={collection} />
      }
      {collection.createdBy &&
        <SidebarAuthor item={collection} />
      }
    </aside>
  )
}