import {createContext, type Dispatch, type SetStateAction} from "react";
import type {SetURLSearchParams} from "react-router-dom";

interface FiltersContextValue {
  cardsOnPage: number;

  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;

  specFilter: string | null;

  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  debounceKeywords: string;

  clearFilters: (nextSpec?: string) => void;

  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export const FiltersContext = createContext<FiltersContextValue | null>(null);