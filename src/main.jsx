import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { RouterProvider } from 'react-router-dom'
import { RouterProvider, } from "react-router-dom";
import MainRoute from './Route/MainRoute.jsx';
import AuthProvider from './AuthContext/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={MainRoute}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
