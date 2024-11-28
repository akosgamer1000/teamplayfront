import React from 'react';
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import Felvetel from './components/Felvetel';
import Listazas from './components/Listazas';
import ViewEmail from './components/viewEmail';
import Email from './email';
const router = createBrowserRouter([
  {
    path: "/felvetel",
    element: <Felvetel />,
  },
  {
    path: "/listazas",
    element: <Listazas />,
  },
  {
    path: "/viewEmail",
    element: <ViewEmail />,
  },

]);


createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
