// import axios from "axios";
//
// const BASE_URL = 'https://api.yeatwork.ru';
//
// export interface CollectionSpec {
//   id: string | number;
//   title: string;
//   slug: string;
//   description: string;
//   imageSrc: string | null;
// }
//
// interface CollectionQuestion {
//   questionSpecializations: CollectionSpec[];
// }
//
// interface ApiResponse<T> {
//   data: T;
//   page: number;
//   limit: number;
//   total: number;
// }
//
// export async function getCollectionSpecsFiltersItems(
//   collectionId: string,
//   specsFilters: string
// ): Promise<CollectionSpec[]> {
//   const response = await axios.get<
//     ApiResponse<CollectionQuestion[]>
//   >(
//     `${BASE_URL}/questions/public-questions`,
//     {
//       params: {
//         collection: collectionId,
//         specs: specsFilters || undefined,
//       },
//     }
//   );
//
//   const specializations = response.data.data.flatMap(
//     (question) => question.questionSpecializations
//   );
//
//   const uniqueSpecializations = Array.from(
//     new Map(
//       specializations.map((spec) => [spec.id, spec])
//     ).values()
//   );
//
//   return uniqueSpecializations;
// }
