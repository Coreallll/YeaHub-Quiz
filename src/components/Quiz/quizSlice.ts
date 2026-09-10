import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { QuizFormValues } from "../../pages/QuizPage/QuizPage.tsx";
import type { Question } from "../../types/questionTypes.ts";
import type { QuizParams } from "../../types/QuizTypes.ts";

interface QuizState {
  params: QuizParams | null;
  questions: Question[];
  currentQuestionId: number | null;
  // answers: QuizAnswer[];
}

const savedQuiz = sessionStorage.getItem("quizState");

const initialState: QuizState = savedQuiz
  ? JSON.parse(savedQuiz)
  : {
      params: null,
      questions: [],
      currentQuestionId: null,
      // answers: [],
    };

const quizStateSlice = createSlice({
  name: "quizState",
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
    },
    setQuizParams(state, action: PayloadAction<QuizFormValues>) {
      state.params = action.payload;
    },
    setCurrentQuestionId(state, action: PayloadAction<number>) {
      state.currentQuestionId = action.payload;
    },
  },
});

export const { setQuestions, setQuizParams, setCurrentQuestionId } = quizStateSlice.actions;

export default quizStateSlice.reducer;
