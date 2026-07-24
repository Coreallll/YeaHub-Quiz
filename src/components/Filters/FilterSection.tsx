import styles from '../../pages/CollectionsPage/CollectionsSidebar/Sidebar.module.css'
import FilterButton from "../ui/FilterButton/FilterButton.js";
import {useState} from "react";
import type {Filter} from "../../api/getFilters.ts";

type ActiveValue = string | string[] | null;

interface FilterSectionProps {
  title: string;
  items: Filter[];
  activeValue: ActiveValue;

  getValue: (item: Filter) => string | number;
  getLabel?: (item: Filter) => string;

  setFilter?: (item: Filter) => void;
  multiple?: boolean;
  showAllBtn?: boolean;
  inactive?: boolean;

  isActive?: (
    item: Filter,
    activeValue: ActiveValue
  ) => boolean;

  onChangeParams?: (
    item: Filter,
    value: string
  ) => void;
}

export default function FilterSection(
  {
    title,
    items,
    activeValue,
    setFilter,
    getValue,
    getLabel = (item) => item.title,
    multiple = false,
    showAllBtn,
    isActive: getIsActive,
    inactive,
    onChangeParams,
  }: FilterSectionProps) {

  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? items : items?.slice(0, 5);



  const renderedItems = visibleItems.map(item => {
    const value = String(getValue(item));
    const label = getLabel(item);
    const isActive = getIsActive
      ? getIsActive(item, activeValue)
      : multiple
        ? (activeValue || []).includes(value)
        : activeValue === value;

    return (
      <li
        className={styles.filterItem}
        key={item.id ?? value}
      >
        <FilterButton
          className={`${isActive ? styles.filterActive : ""} ${inactive && styles.inactive}`}
          onClick={() => {
            if (setFilter) {
              setFilter(item);
            }

            if(onChangeParams) {
              onChangeParams(item, value);
            }
          }}
        >
          {item.imageSrc && <img src={item.imageSrc} alt={label} />}
          <span>{label}</span>
        </FilterButton>
      </li>
    )
  })

  return (
    <section className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <ul className={styles.filtersList}>
        {renderedItems}
      </ul>
      {showAllBtn && renderedItems.length > 4 ? (
        <button
          className={styles.filtersAll}
          onClick={() => {
            setShowAll(prev => !prev)
          }}
        >
          {showAll ? "Скрыть" : "Посмотреть все"}
        </button>
      ) : null}
    </section>
  )
}