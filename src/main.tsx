import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Header } from './components/Header'
import { Task } from './components/Task'
import { Toaster } from 'sonner'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Task content='AAAA' />
    <Toaster richColors />
  </React.StrictMode>
)
