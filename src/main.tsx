import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Header } from './components/Header'
import { Toaster } from 'sonner'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Toaster richColors />
  </React.StrictMode>
)
