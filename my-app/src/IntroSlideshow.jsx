import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './IntroSlideshow.css';
import { introslides } from './data';  // Importing introslides from data

const IntroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();  // Initialize useNavigate

  const nextSlide = () => {
    if (currentSlide < introslides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // Navigate to '/map' when the slideshow finishes
      navigate('/map');
    }
  };

  return (
    <div className="app-container">
      <div className="slideshow-container" onClick={nextSlide}>
        <div className="slide fade-in">
          <img
            src={introslides[currentSlide].img}
            alt={`Slide ${currentSlide + 1}`}
            className="slide-image"
          />
          <p className="slide-text">{introslides[currentSlide].text}</p>
        </div>
      </div>
    </div>
  );
};

export default IntroSlideshow;
