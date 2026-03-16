import React from 'react'
import ReactDom from 'react-dom/client'
import './main.css'
import { App } from './App'

ReactDom.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)