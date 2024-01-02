import React from 'react'
import ReactDOM from 'react-dom/client'

import {BrowserRouter,  Routes, Route} from "react-router-dom"
import { AuthContextProvider } from "./components/store/auth-context";

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
