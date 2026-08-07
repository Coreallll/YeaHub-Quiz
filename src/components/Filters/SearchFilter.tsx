import searchIcon from '../../assets/icons/searchIcon.svg'
import styles from './Filters.module.css';
import type {ChangeEvent, Dispatch, SetStateAction} from "react";
import type {SetURLSearchParams} from "react-router-dom";

interface SearchFilterProps {
  searchDraft: string;
  setSearchDraft: Dispatch<SetStateAction<string>>;
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}

export default function SearchFilter(
    {
      searchDraft,
      setSearchDraft,
    }: SearchFilterProps) {

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearchDraft(event.target.value);
  }

  return (
    <div className={styles.searchWrap}>
      <img
        src={searchIcon} alt="Поиск"
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
  )
}