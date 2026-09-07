import type { User } from "./types.ts";
import type { Skill } from "./skillsTypes.ts";

export interface QuestionsParams {
  currentPage: number;
  cardsOnPage: number;
  specFilter?: string | null;
  collectionId?: string;
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
  questionSkills: Skill[];
}

export interface QuestionsResponse {
  data: Question[];
  page: number;
  limit: number;
  total: number;
}
