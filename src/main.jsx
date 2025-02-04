import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/Recharts.css'
import "./ResponsiveAppBar.jsx"
import ResponsiveAppBar from './ResponsiveAppBar.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ResponsiveAppBar />
    <App />
  </StrictMode>,
)
