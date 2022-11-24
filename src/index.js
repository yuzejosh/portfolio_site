import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from "./App";
import cnApp from "./routes/cnApp";
import ErrorPage from "./error-page";
import hirePage from "./routes/hire"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
  },
  {
    path: "lang=cn",
    element: cnApp(),
    errorElement: <ErrorPage />,
  },
  {
    path: "hire-me",
    element: hirePage(),
    errorElement: <ErrorPage />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

