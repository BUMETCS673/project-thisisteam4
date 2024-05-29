import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Dashboard from "./pages/Dasboard/Dashboard.jsx"
import Project from "./pages/ProjectCreation/ProjectCreationForm.jsx"
import NotFound from "./pages/NotFound/NotFound.jsx"
import './index.css'
import Landing from './pages/Landing/Landing.jsx'
import Login from './pages/Login/Login.jsx'
import Registration from './pages/Registration/Registration.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement:<NotFound/>,
    children: [
      {
        index: true,
        element: <Landing />, //landing page route will be "/"
      },
      {
        path: 'dashboard',
        element: <Dashboard />, //"/dashboard"
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <Registration />
      }
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
           path: 'project/',
           element: <Project />, //"/project/"
         }, 

    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
