import type { User } from "./types.ts";

export interface GetQuestionsItemsParams {
  currentPage: number;
  cardsOnPage: number;
  specFilter?: string | null;
  collectionId?: string;
}

export interface Skills {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

export interface Question {
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

export interface QuestionsResponse {
  data: Question[];
  page: number;
  limit: number;
  total: number;
}
