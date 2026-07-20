import {useSearchParams} from "react-router-dom";
import {type ReactNode, useState} from "react";
import {useDebounce} from "../hooks/useDebounce.ts";
import { FiltersContext } from "./FiltersContext.ts";

interface FiltersProviderProps {
  children: ReactNode;
}

export function FiltersProvider({children}: FiltersProviderProps) {

  const cardsOnPage = 10;

  const [searchParams, setSearchParams] = useSearchParams();

  const specFilter = searchParams.get("specializations") ?? "11";

  const searchQuery = searchParams.get("search") ?? "";
  const [searchValue, setSearchValue] = useState(searchQuery);
  const debounceKeywords = useDebounce(searchValue, 800);


  function clearFilters(nextSpec = "react-frontend-developer") {
    setSearchParams({
      spec: nextSpec,
    });

    setSearchValue("");
  }

  const value = {

    cardsOnPage,
    searchParams,
    setSearchParams,

    specFilter,

    searchValue,
    setSearchValue,
    debounceKeywords,

    clearFilters,
  }

  return (
    <FiltersContext.Provider value={value}>
      {children}
    </FiltersContext.Provider>
  )
}