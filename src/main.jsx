import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/layout/LayOut";
import MySkills from "./components/myComponent/skills/MySkills";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "resume/",
        element: <App />,
      },

      {
        path: "resume/skills",
        element: <MySkills />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
