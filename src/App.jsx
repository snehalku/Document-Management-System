import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
//import { Home } from "./Pages/Home";

import "./App.css";
import AppLayout from "./Components/Layout/AppLayout";
import Dashboard from "./Pages/Dashboard";
import Documents from "./Pages/Documents";
import { Navigate } from "react-router-dom";
import PreviewDocument from "./Pages/previewDocument";
import PreviewDocument1 from "./Pages/previewDocument1";
import Roles from "./Pages/Roles";
import User from "./Pages/User";
import Folders from "./Pages/Folders";
import ViewDocument from "./Pages/ViewDocument";
import VersionControl from "./Pages/VersionControl";
import ApproveDoc from "./Pages/ApproveDoc";
import ApproveDocument from "./Pages/ApproveDocument";
import Archive1 from "./Pages/Archive1";
import Login from "./Pages/Login";
import Invoice from "./Pages/Invoice";
import InvoiceDocument from "./Pages/InvoiceDocument";
import HR from "./Pages/Hr";
import HrDocument from "./Pages/HrDocument";
import EditRole from "./Pages/EditRole";
import CreateRole from "./Pages/CreateRole";
import EditUser from "./Pages/EditUser";
import CreateUser from "./Pages/CreateUser";

function App() {
  const router = createBrowserRouter([
    {
      path: "login",
      element: <Login />,
    },
    {
      index: true,
      element: <Navigate to="/login" />,
    },
    {
      path: "/",
      element: <AppLayout />,
      children: [
        // {
        //   path: "dashboard",
        //   element: <Dashboard />,
        // },
        // {
        //   index: true,
        //   element: <Navigate to="/dashboard" />,
        // },

        {
          path: "previewDocument",
          element: <PreviewDocument />,
        },
        {
          path: "previewDocument1",
          element: <PreviewDocument1 />,
        },
        {
          path: "documents",
          element: <Documents />,
        },
        {
          path: "roles",
          element: <Roles />,
        },
        {
          path: "user",
          element: <User />,
        },
        {
          path: "folders",
          element: <Folders />,
        },
        {
          path: "viewDocument",
          element: <ViewDocument />,
        },
        {
          path: "versionControl",
          element: <VersionControl />,
        },
        {
          path: "approveDoc",
          element: <ApproveDoc />,
        },
        {
          path: "approveDocument",
          element: <ApproveDocument />,
        },
        {
          path: "archiveDocument1",
          element: <Archive1 />,
        },
        {
          path: "invoice",
          element: <Invoice />,
        },
        {
          path: "invoiceDocument",
          element: <InvoiceDocument />,
        },
        {
          path: "hr",
          element: <HR />,
        },
        {
          path: "hrDocument",
          element: <HrDocument />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "editRole",
          element: <EditRole />,
        },
        {
          path: "createRole",
          element: <CreateRole />,
        },
        {
          path: "editUser",
          element: <EditUser />,
        },
        {
          path: "createUser",
          element: <CreateUser />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
