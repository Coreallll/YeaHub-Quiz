import axios from "axios";

const BASE_URL = 'https://api.yeatwork.ru';

interface GetQuestionsItemsParams {
  currentPage: number;
  cardsOnPage: number;
  specFilter?: string | null;
  debounceKeywords?: string;
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
  }: GetQuestionsItemsParams): Promise<QuestionsResponse> {

  const params = new URLSearchParams();

  if(currentPage) params.set('page', String(currentPage));
  if(cardsOnPage) params.set('limit', String(cardsOnPage));

  if (specFilter) {
    params.set('specializationId', specFilter);
  }

  const url = `${BASE_URL}/questions/public-questions?${params.toString()}`

  const response = await axios.get(url);
  return response.data;
}