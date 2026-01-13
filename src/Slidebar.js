import React, { useState } from "react";
import "./App.css";
import img1 from "./image-1.jpg";
import img2 from "./image-2.jpg";
import img3 from "./image-3.jpg";
import Thirdnavbar from "./Third-navbar";

const images = [img1, img2, img3];

const App = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      {/* Image display */}
      <img src={images[index]} alt="slider" className="slide-image" />

      {/* Navigation buttons */}
      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>

      {/* Dots indicator */}
      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
       <Thirdnavbar />
    </div>
   
  );
};

export default App;