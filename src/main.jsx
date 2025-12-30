import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './Context/ThemeContext.jsx'
import { AuthProvider } from './Context/AuthContext.jsx' // Import AuthProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider> {/* Wrap App with AuthProvider */}
        <App />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
