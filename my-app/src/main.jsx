import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import IntroSlideshow from './IntroSlideshow.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/map" element={<App />} />
        <Route path="/intro" element={<IntroSlideshow />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
