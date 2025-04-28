import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
//import { Home } from "./Pages/Home";

import "./App.css";
import AppLayout from "./Components/Layout/AppLayout";
import Dashboard from "./Pages/Dashboard";
import previewDocument from "./Pages/previewDocument";
import Documents from "./Pages/Documents";
import { Navigate } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          index: true,
          element: <Navigate to="/dashboard" />,
        },
        {
          path: "previewDocument",
          element: <previewDocument />,
        },
        {
          path: "documents",
          element: <Documents />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
