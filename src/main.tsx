import React from 'react';
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import Felvetel from './components/Felvetel';

const router = createBrowserRouter([
  {
    path: "/felvetel",
    element: <Felvetel />,
  },

]);


createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
