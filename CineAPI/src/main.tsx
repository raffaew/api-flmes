import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MovieDetailsProvider } from './movieDetailsContext/movieDetailsProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MovieDetailsProvider >
       <App />
    </MovieDetailsProvider>
  </StrictMode>,
)
