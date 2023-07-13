import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shoppers from './pages/Shoppers'
import Business from './pages/Business'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/shoppers",
    element: <Shoppers />,
  },

  {
    path: "/business",
    element: <Business />,
  },
]);



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
