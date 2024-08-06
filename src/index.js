import React from "react";
import ReactDOM from 'react-dom/client';
// import { RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
