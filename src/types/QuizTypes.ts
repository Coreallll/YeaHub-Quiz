import type { Question } from "./questionTypes.ts";

export interface QuizParams {
  spec: number;
  skills: number[];
  complexity: number[];
  quizQuestionsLimit: number;
}
export interface QuizResponse {
  questions: Question[];
  page: number;
  limit: number;
  total: number;
}
