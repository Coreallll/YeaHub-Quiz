import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import CollectionsPage from "./pages/CollectionsPage/CollectionsPage.tsx";
import DetailedCollectionPage from "./pages/DetailedPage/DetailedCollectionPage/DetailedCollectionPage.tsx";
import DetailedQuestionPage from "./pages/DetailedPage/DetailedQuestionPage/DetailedQuestionPage.tsx";
import QuizPage from "./pages/QuizPage/QuizPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/collections",
        element: <CollectionsPage />,
      },
      {
        path: "/collections/:collectionId",
        element: <DetailedCollectionPage />,
      },
      {
        path: "/collections/:collectionId/questions/:questionId",
        element: <DetailedQuestionPage />,
      },
      {
        path: "/quiz",
        element: <QuizPage />,
      },
    ],
  },
]);
