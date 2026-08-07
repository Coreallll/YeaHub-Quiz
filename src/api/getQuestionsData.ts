import axios from "axios";
import type {User} from "./getColletionsData.ts";

const BASE_URL = 'https://api.yeatwork.ru';

interface GetQuestionsItemsParams {
  currentPage: number;
  cardsOnPage: number;
  specFilter?: string | null;
  collectionId?: string;
  signal?: AbortSignal;
}

interface Skills {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

export interface QuestionItem {
  id: number;
  title: string;
  imageSrc: string | null;
  description: string;
  longAnswer: string;
  shortAnswer: string;
  rate: number;
  complexity: number;
  keywords: string[];
  createdBy: User;
  questionSkills: Skills[];
}

interface QuestionsResponse {
  data: QuestionItem[];
  page: number;
  limit: number;
  total: number;
}

export async function getQuestionsItems(
  {
    currentPage,
    cardsOnPage,
    specFilter,
    collectionId,
    signal
  }: GetQuestionsItemsParams): Promise<QuestionsResponse> {

  const params = new URLSearchParams();

  if(currentPage) params.set('page', String(currentPage));
  if(cardsOnPage) params.set('limit', String(cardsOnPage));

  if (specFilter) {
    params.set('specializationId', specFilter);
  }

  if (collectionId) {
    params.set('collection', String(collectionId));
  }

  const url = `${BASE_URL}/questions/public-questions?${params.toString()}`

  const response = await axios.get(url, {signal});
  return response.data;
}