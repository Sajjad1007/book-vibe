import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";
import BookDetails from "../pages/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("../booksData.json"),
        hydrateFallbackElement: (
          <div className="grid place-content-center w-full min-h-[calc(100vh-72px)]">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        ),
      },
      {
        path: "details/:bookId",
        Component: BookDetails,
        loader: () => fetch("../booksData.json"),
        hydrateFallbackElement: (
          <div className="grid place-content-center w-full min-h-[calc(100vh-72px)]">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        ),
      },
      {
        path: "lists",
        Component: ListedBooks,
      },
      {
        path: "pages",
        Component: PagesToRead,
      },
    ],
  },
]);
