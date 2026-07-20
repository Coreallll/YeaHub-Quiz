import axios from "axios";

const BASE_URL = 'https://api.yeatwork.ru';

interface GetCollectionsItemsParams {
  currentPage: number;
  cardsOnPage: number;
  specFilter?: string | null;
  debounceKeywords?: string;
}

interface Company {
  id: string;
  title: string;
  description: string;
  imageSrc: string | null;
}
interface Specializations {
  id: string;
  title: string;
  slug: string;
  description: string;
  imageSrc: string | null;
}

export interface CollectionItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  imageSrc: string | null;
  isFree: boolean;
  keywords: string[];
  company: Company;
  specializations: Specializations[];
  questionsCount: number;
}

interface CollectionsResponse {
  data: CollectionItem[];
  page: number;
  limit: number;
  total: number;
}

export async function getCollectionsItems({
  currentPage,
  cardsOnPage,
  specFilter,
  debounceKeywords,
}: GetCollectionsItemsParams): Promise<CollectionsResponse> {

  const params = new URLSearchParams();

  if(currentPage) params.set('page', String(currentPage));
  if(cardsOnPage) params.set('limit', String(cardsOnPage));

  if (specFilter) {
    params.set('specializations', specFilter);
  }

  if(debounceKeywords) {
    params.set('titleOrDescriptionSearch', debounceKeywords.toLowerCase().trim());
  }

  const url = `${BASE_URL}/collections/public?${params.toString()}`

  const response = await axios.get(url);
  return response.data;
}