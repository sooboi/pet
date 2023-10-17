import "./index.css";
import React from "react";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Write from "./pages/Write";
import MyPage from "./pages/MyPage";
import Edit from "./pages/Edit";
import EditDetail from "./pages/EditDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/mypage/:id",
        element: <MyPage />,
      },
      {
        path: "/edit",
        element: <Edit />,
      },
      {
        path: "/edit/:id",
        element: <EditDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  /* </React.StrictMode> */
);
