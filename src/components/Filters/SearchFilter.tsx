import searchIcon from "../../assets/icons/searchIcon.svg";
import styles from "./Filters.module.css";
import type { ChangeEvent } from "react";
import useSearch from "../../hooks/useSearch.ts";

export default function SearchFilter() {
  const { searchDraft, setSearchDraft } = useSearch();

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearchDraft(event.target.value);
  }

  return (
    <div className={styles.searchWrap}>
      <img
        src={searchIcon}
        alt="Поиск"
        className={styles.searchIcon}
      />
      <input
        className={styles.searchInput}
        type="search"
        name="search"
        placeholder="Введите запрос..."
        value={searchDraft}
        onChange={handleSearch}
      />
    </div>
  );
}
