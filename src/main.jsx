import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { HashRouter } from 'react-router-dom';
import { TranslationProvider } from './Context/Languaje-context.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <React.StrictMode>
      <TranslationProvider>
        <App />
      </TranslationProvider>
    </React.StrictMode>
  </HashRouter>
)
