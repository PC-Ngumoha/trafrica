import React from "react";
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import App from './App';
import Home from "./Routes/Home/Home";
import Login from "./Routes/Login/Login";
import Register from "./Routes/Register/Register";
import { AuthProvider } from "./Context/auth.context";

// Implementing a basic browser router to handle the app's routing
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthProvider>
        <App />
      </AuthProvider>
    ),
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
