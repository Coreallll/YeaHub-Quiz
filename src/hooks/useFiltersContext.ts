import {FiltersContext} from "../context/FiltersContext.ts";
import {useContext} from "react";

export function useFiltersContext() {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error(
      "useFilters must be used inside CollectionsFiltersProvider"
    );
  }

  return context;
}