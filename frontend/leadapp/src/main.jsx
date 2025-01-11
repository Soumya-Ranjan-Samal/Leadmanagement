import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <body className="font-sans bg-cyan-200 flex flex-col h-screen fixed w-screen">
    <App />
    </body>
  </StrictMode>,
)
