import searchIcon from '../../assets/icons/searchIcon.svg'
import styles from '../../pages/CollectionsPage/CollectionsSidebar/Sidebar.module.css';
import type {ChangeEvent, Dispatch, SetStateAction} from "react";
import type {SetURLSearchParams} from "react-router-dom";

interface SearchFilterProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}

export default function SearchFilter(
    {
      searchValue,
      setSearchValue,
      searchParams,
      setSearchParams
    }: SearchFilterProps) {

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setSearchValue(value);

    const params = Object.fromEntries(searchParams);
    value.trim().length > 0 ? params.search = value : delete params.search;

    setSearchParams(params);
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
        value={searchValue}
        onChange={handleSearch}
      />
    </div>
  )
}