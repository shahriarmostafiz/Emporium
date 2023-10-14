import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { RouterProvider } from 'react-router-dom'
import { RouterProvider, } from "react-router-dom";
import MainRoute from './Route/MainRoute.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={MainRoute}></RouterProvider>
  </React.StrictMode>,
)
