import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Panel from "./components/panel/Panel";
import Home from "./components/Home";
import Dashboard from "./components/panel/pages/Dashboard";
import Forms from "./components/panel/pages/Forms";
import Tables from "./components/panel/pages/Tables";

export const pages = [
  {
    path: "",
    element: <Dashboard />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "forms",
    element: <Forms />,
  },
  {
    path: "tables",
    element: <Tables />,
  },
];
const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/panel",
    element: <Panel />,
    children: pages,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
