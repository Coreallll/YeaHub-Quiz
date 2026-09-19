import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi.ts";
import quizStateReducer from "../components/Quiz/quizSlice.ts";
import { saveQuizState } from "../utils/quizState.ts";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    quizState: quizStateReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

store.subscribe(() => {
  const quiz = store.getState().quizState;
  saveQuizState(quiz);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
