import type { Specialization, User } from "./types.ts";

export interface GetCollectionsParams {
  currentPage?: number;
  cardsOnPage?: number;
  specs?: string;
  search?: string;
  accessFilter?: boolean;
}

export interface Company {
  id: string;
  title: string;
  description: string;
  imageSrc: string | null;
}

export interface Collection {
  id: string;
  title: string;
  slug: string;
  description: string;
  imageSrc: string | null;
  isFree: boolean;
  keywords: string[];
  company: Company;
  specializations: Specialization[];
  questionsCount: number;
  createdBy: User;
}

export interface CollectionsResponse {
  data: Collection[];
  page: number;
  limit: number;
  total: number;
}
