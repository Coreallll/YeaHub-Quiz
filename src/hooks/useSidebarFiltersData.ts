import {useEffect, useState} from "react";
import {getFiltersItems} from "../api/getFilters.ts";
import type {Filter} from "../api/getFilters.ts";

export function useSidebarFiltersData() {
  const [specs, setSpecs] = useState<Filter[]>([]);
  const [isSidebarLoading, setIsSidebarLoading] = useState(true);
  const [sidebarFiltersError, setSidebarFiltersError] = useState("");

  useEffect(() => {
    async function getSidebarData() {
      try {
        setIsSidebarLoading(true);

        const specsData = await getFiltersItems('specializations');
        setSpecs(specsData);
      } catch (error) {
        console.error(error);
        setSidebarFiltersError("Не удалось загрузить фильтры");
      } finally {
        setIsSidebarLoading(false);
      }
    }

    getSidebarData();
  }, []);

  return { specs, isSidebarLoading, sidebarFiltersError };
}