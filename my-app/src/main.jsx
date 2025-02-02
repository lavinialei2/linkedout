import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MapPage from './MapPage.jsx'
import IntroSlideshow from './IntroSlideshow.jsx'
import StampPage from './StampPage.jsx'
import ReviewForm from './ReviewForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroSlideshow />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/stampbook" element={<StampPage />} />
        <Route path="/post" element={<ReviewForm />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
