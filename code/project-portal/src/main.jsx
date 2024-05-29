import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Dashboard from "./pages/Dasboard/Dashboard.jsx"
import NotFound from "./pages/NotFound/NotFound.jsx"
import './index.css'
import Landing from './pages/Landing/Landing.jsx'
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

    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
