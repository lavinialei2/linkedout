import React, { useState } from 'react';
import './IntroSlideshow.css';
import { toucans } from './data';

const slides = [
  {
    text: "Welcome to LinkedOut! I’m Bodacious Beak Brat Toucan, and I will serve as your most beloved guide and source of encouragement as you embark on your local adventures.",
    image: toucans[0].img
  },
  {
    text: "You can use this app to document and share your adventures, including the bus routes you take, the stops you make, and any special memories you create along the way.",
    image: toucans[1].img
  },
  {
    text: "And if it’s your first time or your hundredth time adventuring? No worries! You can find routes that other people have taken for inspiration and find new friends of similar or different identity groups as you to travel and explore the city with! ",
    image: toucans[2].img
  },
  {
    text: "Additionally, this platform aims to uplift your local minority communities. Highlight your favorite small businesses, particularly those that are queer-, BIPOC-, or otherwise minority-owned, or spaces you find to be safe and celebratory of diversity and your identity and background!",
    image: toucans[3].img
  },
  {
    text: "Well, that’s it for now! I’ll see you out and about the city!",
    image: toucans[4].img
  },
  {
    text: "...I better.",
    image: toucans[5].img
  }
];

const IntroSlideshow = ({ onFinish }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onFinish && onFinish();
    }
  };

  return (
    <div className="app-container">
      <div className="slideshow-container" onClick={nextSlide}>
        <div className="slide fade-in">
          <p className="slide-text">{slides[currentSlide].text}</p>
          <img src={slides[currentSlide].image} alt="Slide" className="slide-image" />
        </div>
      </div>
    </div>
  );
};

export default IntroSlideshow;
