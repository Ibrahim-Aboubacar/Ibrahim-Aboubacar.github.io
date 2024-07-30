import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Header from './components/Header.jsx'

import './assets/css/tailwind.css'
import Footer from './components/Footer.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="min-h-screen w-screen bg-gray-200">
        <Header />
        <App />
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
)
