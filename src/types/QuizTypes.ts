import type { Question } from "./questionTypes.ts";

export interface QuizParams {
  specialization: number;
  skills: number[];
  complexity: number[];
  limit: number;
}
export interface QuizResponse {
  questions: Question[];
  page: number;
  limit: number;
  total: number;
}
