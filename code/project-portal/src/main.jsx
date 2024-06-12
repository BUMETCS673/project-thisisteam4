<<<<<<< HEAD

=======
>>>>>>> main
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Dashboard from "./pages/Dasboard/Dashboard.jsx";
<<<<<<< HEAD
import Project from "./pages/ProjectCreation/FormCard.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import "./index.css";
import Landing from "./pages/Landing/Landing.jsx";
import Authentication from "./pages/AuthenticationPage/Authentication.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";

const router = createBrowserRouter([
  {
    path: '/',
=======
import Project from "./pages/ProjectCreation/ProjectCreationForm.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import "./index.css";
import Landing from "./pages/Landing/Landing.jsx";
import Login from "./pages/Login/Login.jsx";
import Registration from "./pages/Registration/Registration.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
>>>>>>> main
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Landing />, //landing page route will be "/"
      },
      {
<<<<<<< HEAD
        path: 'dashboard',
        element: <Dashboard />, //"/dashboard"
      },
      // {
      //   path: 'login',
      //   element: <Login />,
      // },
      // {
      //   path: 'signup',
      //   element: <Registration />,
      // },
      {   
        path: "auth",
        element: <Authentication />,
=======
        path: "dashboard",
        element: <Dashboard />, //"/dashboard"
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Registration />,
>>>>>>> main
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
<<<<<<< HEAD
        path: 'project/',
=======
        path: "project/",
>>>>>>> main
        element: <Project />, //"/project/"
      },
    ],
  },
]);
<<<<<<< HEAD
// <<<<<<< lab3-brennamahn
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// =======

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
// >>>>>>> iter2
=======
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
>>>>>>> main
);
