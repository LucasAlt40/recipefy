import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import HomePage from "./pages/HomePage"
import Sign from "./pages/Sign"

import "./main.css"
import Menu from "./pages/Menu"
import Recipe from "./pages/Recipe"
import SignUp from "./pages/SignUp"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/sign",
    element: <Sign />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/recipe/:id",
    element: <Recipe />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
