import {createContext, type Dispatch, type SetStateAction} from "react";
import type {SetURLSearchParams} from "react-router-dom";

interface FiltersContextValue {
  cardsOnPage: number;

  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;

  specFilter: string | null;

  searchDraft: string;
  setSearchDraft: Dispatch<SetStateAction<string>>;

  clearFilters: (nextSpec?: string) => void;

  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;

  accessFilter: string;
  appliedSearch?: string;
}

export const FiltersContext = createContext<FiltersContextValue | null>(null);