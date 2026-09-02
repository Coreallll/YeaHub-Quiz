// import {useSearchParams} from "react-router-dom";
// import {type ReactNode, useEffect, useRef, useState} from "react";
// import {useDebounce} from "../hooks/useDebounce.ts";
// import { FiltersContext } from "./FiltersContext.ts";
//
// interface FiltersProviderProps {
//   children: ReactNode;
// }
//
// export function FiltersProvider({children}: FiltersProviderProps) {
//
//   const cardsOnPage = 10;
//
//   const [searchParams, setSearchParams] = useSearchParams();
//
//   const specFilter = searchParams.get("specializations") ?? "11";
//
//   const appliedSearch = searchParams.get("search") ?? "";
//   const [searchDraft, setSearchDraft] = useState(appliedSearch);
//   const [syncedSearch, setSyncedSearch] = useState(appliedSearch);
//   const debouncedSearch = useDebounce(searchDraft, 800);
//
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//
//   const accessFilter = searchParams.get("isFree") ?? "";
//
//   if (appliedSearch !== syncedSearch) {
//     setSyncedSearch(appliedSearch);
//     setSearchDraft(appliedSearch);
//   }
//
//   const setSearchParamsRef = useRef(setSearchParams);
//   useEffect(() => {
//     setSearchParamsRef.current = setSearchParams;
//   });
//
//   useEffect(() => {
//     const normalizedSearch = debouncedSearch.trim();
//
//     setSearchParamsRef.current(
//       (prevParams) => {
//         const params = new URLSearchParams(prevParams);
//
//         if (normalizedSearch === (prevParams.get("search") ?? "")) return params;
//
//         if (normalizedSearch) {
//           params.set("search", normalizedSearch);
//         } else {
//           params.delete("search");
//         }
//
//         params.delete("page");
//
//         return params;
//       },
//       {
//         replace: true,
//       }
//     );
//   }, [debouncedSearch]);
//
//   function clearFilters(
//     nextSpec: string = "11"
//   ) {
//     setSearchDraft("");
//
//     setSearchParams((prevParams) => {
//       const params =
//         new URLSearchParams(prevParams);
//
//       params.set(
//         "specializations",
//         nextSpec
//       );
//
//       params.delete("search");
//       params.delete("isFree");
//       params.delete("page");
//
//       return params;
//     });
//   }
//
//   const value = {
//
//     cardsOnPage,
//     searchParams,
//     setSearchParams,
//
//     specFilter,
//
//     searchDraft,
//     setSearchDraft,
//
//     clearFilters,
//
//     isSidebarOpen,
//     setIsSidebarOpen,
//     accessFilter,
//     appliedSearch
//   }
//
//   return (
//     <FiltersContext.Provider value={value}>
//       {children}
//     </FiltersContext.Provider>
//   )
// }
