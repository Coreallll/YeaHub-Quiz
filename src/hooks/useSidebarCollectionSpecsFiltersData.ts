// import {useEffect, useState} from "react";
// import {type CollectionSpec, getCollectionSpecsFiltersItems} from "../api/getCollectionSpecsFilters.ts";
// import {useParams} from "react-router-dom";
//
// export function useSidebarCollectionSpecsFiltersData() {
//   const [collectionSpecs, setCollectionSpecs] = useState<CollectionSpec[]>([]);
//   const [isCollectionSidebarLoading, setIsCollectionSidebarLoading] = useState(true);
//   const [collectionSpecFiltersError, setCollectionSpecFiltersError] = useState("");
//
//   const { collectionId } = useParams();
//
//   useEffect(() => {
//     async function getSidebarData() {
//       try {
//         setIsCollectionSidebarLoading(true);
//
//         const collectionSpecsData = await getCollectionSpecsFiltersItems(String(collectionId), 'questionSpecializations');
//         setCollectionSpecs(collectionSpecsData);
//       } catch (error) {
//         console.error(error);
//         setCollectionSpecFiltersError("Не удалось загрузить фильтры");
//       } finally {
//         setIsCollectionSidebarLoading(false);
//       }
//     }
//
//     getSidebarData();
//   }, []);
//
//   return { collectionSpecs, isCollectionSidebarLoading, collectionSpecFiltersError };
// }
