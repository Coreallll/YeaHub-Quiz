import searchIcon from '../../assets/icons/searchIcon.svg'
import styles from '../../pages/CollectionsPage/CollectionsSidebar/Sidebar.module.css';
import type {ChangeEvent, Dispatch, SetStateAction} from "react";
import type {SetURLSearchParams} from "react-router-dom";
import {useCollections} from "../../hooks/useCollections.ts";

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

  const {setIsCollectionsLoading} = useCollections();

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setIsCollectionsLoading(true);
    const value = event.target.value;
    setSearchValue(value);

    const params = Object.fromEntries(searchParams);
    if(value.trim().length > 0) {
      params.search = value
    } else {
      delete params.search
    }

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