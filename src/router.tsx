import {createBrowserRouter} from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import CollectionsPage from "./pages/CollectionsPage/CollectionsPage.tsx";
import DetailedCollectionPage from "./pages/DetailedPage/DetailedCollectionPage/DetailedCollectionPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/collections",
        element: <CollectionsPage />
      },
      {
        path: "/collections/:id",
        element: <DetailedCollectionPage />,
      }
    ]
  },

])