import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Dashboard from "./pages/Dasboard/Dashboard.jsx";
import Project from "./pages/ProjectCreation/ProjectCreationForm.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import "./index.css";
import Landing from "./pages/Landing/Landing.jsx";
import Authentication from "./pages/AuthenticationPage/Authentication.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Landing />, //landing page route will be "/"
      },
      {
        path: "dashboard",
        element: <Dashboard />, //"/dashboard"
      },
      {
        path: "auth",
        element: <Authentication />,
      },
      // {
      //   path: 'about',
      //   element: <About />, // "/about"
      // },
      // {
      //   path: 'me',
      //   element: <Profile />, //"/me"
      // },
      // {
      //   path: 'project/:id',
      //   element: <Project />, //"/project/:id"
      // },
      {
        path: "project/",
        element: <Project />, //"/project/"
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
