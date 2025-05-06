import React from "react";
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
        loader: () => fetch("booksData.json"),
        Component: Home,
      },
      {
        path: "/:bookId",
        loader: () => fetch("booksData.json"),
        Component: BookDetails,
      },
      {
        path: "lists",
        loader: () => fetch("booksData.json"),
        Component: ListedBooks,
      },
      {
        path: "pages",
        Component: PagesToRead,
      },
    ],
  },
]);
