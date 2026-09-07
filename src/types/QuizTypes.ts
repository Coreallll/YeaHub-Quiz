import type { Specialization } from "./specializationTypes.ts";
import type { Skill } from "./skillsTypes.ts";
import type { Question } from "./questionTypes.ts";

export interface QuizParams {
  specs: Specialization[];
  skills: Skill[];
  complexity: number[];
  quizQuestionsLimit: number;
}
export interface QuizResponse {
  questions: Question[];
  page: number;
  limit: number;
  total: number;
}
