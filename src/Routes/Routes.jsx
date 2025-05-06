import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../components/Root";
import ErrorPage from "./../components/ErrorPage";
import Home from "./../components/Home";
import BookDetails from "./../components/BookDetails";
import ListedBooks from "../components/ListedBooks";
import PagesToRead from "../components/PagesToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("booksData.json"),
        Component: Home,
      },
      {
        path: "/:bookId",
        loader: () => fetch("booksData.json"),
        Component: BookDetails,
      },
      {
        path: "/lists",
        loader: () => fetch("booksData.json"),
        Component: ListedBooks,
      },
      {
        path: "/pages",
        Component: PagesToRead,
      },
    ],
  },
]);
